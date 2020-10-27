
/**
 * 전국의 covid 상태데이터를 가져오기 위해서 만든 redux
 * axios로 데이터를 가져오고
 * 각종함수로 data를 handling하여 필요한 데이터를 만들어 보낸다.
 */

import {createAction, handleActions} from 'redux-actions';
import axios from 'axios';

const initialState = { 
    loading: false,
    result: null,
    error: false
};

const SEARCH_START   = 'covidAll/SEARCH_START';
const SEARCH_SUCCESS = 'covidAll/SEARCH_SUCCESS';
const SEARCH_FAILURE = 'covidAll/SEARCH_FAILURE';

export const searchActionStart   = createAction(SEARCH_START);
export const searchSuccessAction = createAction(SEARCH_SUCCESS);
export const searchFailureAction = createAction(SEARCH_FAILURE);

export default handleActions(
    {
        // 리스트 가져오기 시작 --> loading값을 true로, error는 false로 변경
        [SEARCH_START]: (state = initialState, action) => {
            return {
                ...state,
                loading: true,
                error: false
            };
        },
        // 리스트 가져오기 성공 --> loading과 error를 false로 변경, result를 할당한다.
        [SEARCH_SUCCESS]: (state = initialState, action) => {
            return {
                ...state,
                // 백엔드에서 전달하는 JSON 데이터 전문은 항상 action.payload 로 전달된다. 
                // 이 값을 통째로 활용할 것인지, 일부만 활용할 것인지에 따라
                // result에 채워 넣을 값이 결정된다.
                loading: false,
                result: action.payload.result,
                error: false
            };
        },
        // 리스트 가져오기 실패 --> loading값을 false로, error는 true로 변경
        [SEARCH_FAILURE]: (state = initialState, action) => {
            return {
                ...state,
                loading: false,
                error: true
            };
        }
    },
    initialState
);

const get_accState = (response) => {
    const accState = {'기준시각': response.data.collection_datetime, '확진환자':0,'격리해제':0,'격리중':0,'사망자':0};
    const k_map = {'confirmed_acc':'확진환자','released_acc':'격리해제','active':'격리중','death_acc':'사망자'};
    const data = response.data.data
    for(let region in data){
        let cityData = data[region];
        for(let k in cityData){
            // just loop in the hash_map
            if(Object.getOwnPropertyNames(k_map).indexOf(k)>=0){
                let lastIndex = cityData[k].length-1;
                accState[k_map[k]] += cityData[k][lastIndex];
            }
        }
    }
    console.group('누적 확진자 현황')
    console.debug(accState);
    console.groupEnd();

    return accState;
}

const get_confirmedChartData = (response) => {
    const data = response.data.data
    const k_map = {'date':'날짜','confirmed':'확진자','confirmed_acc':'누적확진자','released':'격리해제','released_acc':'누적격리해제','active':'격리중','death':'사망자','death_acc':'누적사망자'};
    const region = Object.getOwnPropertyNames(data)[0];
    const lastIndex = data[region].date.length;
    const n = lastIndex-1 //1 ~ lastIndex-1
    let chartData = {날짜:[]};
    for(let i=0; i<n; i++){
        chartData.날짜[i] = data[region].date[lastIndex-1-n+i];
    }
    for(let region in data){
        let cityData = data[region];
        ['confirmed','confirmed_acc'].forEach((k,i,arr)=>{
            if (chartData[k_map[k]]===undefined){
                chartData[k_map[k]] = new Array(n).fill(0)
            }
            for(let i=0; i<n; i++){
                chartData[k_map[k]][i] += cityData[k][lastIndex-1-n+i];
            }
        })
    }
    console.group('전국 확진자 현황')
    console.debug(chartData);
    console.groupEnd();

    return chartData;
}

const get_releasedChartData = (response) => {
    const data = response.data.data
    const k_map = {'date':'날짜','confirmed':'확진자','confirmed_acc':'누적확진자','released':'격리해제','released_acc':'누적격리해제','active':'격리중','death':'사망자','death_acc':'누적사망자'};
    const region = Object.getOwnPropertyNames(data)[0];
    const lastIndex = data[region].date.length;
    const n = lastIndex -1 //1 ~ lastIndex-1
    let chartData = {날짜:[]};
    for(let i=0; i<n; i++){
        chartData.날짜[i] = data[region].date[lastIndex-1-n+i];
    }
    for(let region in data){
        let cityData = data[region];
        ['released','released_acc'].forEach((k,i,arr)=>{
            if (chartData[k_map[k]]===undefined){
                chartData[k_map[k]] = new Array(n).fill(0)
            }
            for(let i=0; i<n; i++){
                chartData[k_map[k]][i] += cityData[k][lastIndex-1-n+i];
            }
        })
    }
    console.group('전국 격리해제 현황')
    console.debug(chartData);
    console.groupEnd();

    return chartData;
}

const get_chartDataBundle = (response) => {
    const data = response.data.data
    const chartDataInit = {'날짜':[],'확진자':[],'누적확진자':[],'격리해제':[],'누적격리해제':[],'격리중':[],'사망자':[],'누적사망자':[]}
    const k_map = {'date':'날짜','confirmed':'확진자','confirmed_acc':'누적확진자','released':'격리해제','released_acc':'누적격리해제','active':'격리중','death':'사망자','death_acc':'누적사망자'};
    let chartDataBundle = {'전국':chartDataInit};

    let chartDataAll = {...chartDataInit};
    for(let region in data){
        let cityData = data[region];
        let chartData = {...chartDataInit};
        for(let k in cityData){
            if(k==='date'){
                chartDataAll[k_map[k]] = cityData[k]
            }else{
                if (chartDataAll[k_map[k]].length == 0) {
                    chartDataAll[k_map[k]] = new Array(cityData[k].length).fill(0);
                }
                cityData[k].forEach((v,i)=>{
                    chartDataAll[k_map[k]][i] += v
                })
            }
            chartData[k_map[k]] = cityData[k]
        }
        chartDataBundle[region]=chartData;
    }
    chartDataBundle['전국']=chartDataAll;

    console.group('전국 확진자 현황')
    console.debug(chartDataBundle);
    console.groupEnd();

    return chartDataBundle;
}

export const covidAllAsync = () => async dispatch => {
    /** Ajax 시작을 알림 --> 컴포넌트에서 로딩바를 표시하기 위함 */
    // 검색 시작 --> loading값을 true로, error는 false로 변경
    dispatch(searchActionStart());

    /** Ajax 구현 */
    // 예외처리: try 블록을 실행하는 도중 에러가 발생하면 그 즉시 처리를 중단하고 catch 블록으로 제어가 이동한다.
    try {
        // Ajax 연동 결과로 전달되는 JSON 전문은 response.data 로 접근할 수 있다.
        const apiUrl = 'http://itpaper.co.kr/demo/covid19/all.php';
        const response = await axios.get(apiUrl);
        
        console.group("통신결과");
        console.debug(response);
        console.groupEnd();

        const result = {}
        result['accState'] = get_accState(response);
        // result['confirmedChartData'] = get_confirmedChartData(response);
        // result['releasedChartData'] = get_releasedChartData(response);
        result['chartDataBundle'] = get_chartDataBundle(response);
        console.log(result)
        /** 통신처리 --> loading값을 false로, result는 채우고, error는 false로 처리 */
        // 여기서 전달하는 파라미터가 action 함수 안에서 `action.payload`가 된다.
        dispatch(searchSuccessAction({result: result}));
    } catch (e) {
        // 에러가 발생했음을 알림 --> loading값을 false로, error는 true로 변경
        dispatch(searchFailureAction());
    }
};