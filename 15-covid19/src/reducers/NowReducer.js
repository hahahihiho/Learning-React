
import {createAction, handleActions} from 'redux-actions';
import axios from 'axios';
import moment from 'moment';

const initialState = { 
    loading: false,
    result: null,
    error: false
};

const SEARCH_START   = 'covidNow/SEARCH_START';
const SEARCH_SUCCESS = 'covidNow/SEARCH_SUCCESS';
const SEARCH_FAILURE = 'covidNow/SEARCH_FAILURE';

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

export const covidNowAsync = () => async dispatch => {
    /** Ajax 시작을 알림 --> 컴포넌트에서 로딩바를 표시하기 위함 */
    // 검색 시작 --> loading값을 true로, error는 false로 변경
    dispatch(searchActionStart());

    /** Ajax 구현 */
    // 예외처리: try 블록을 실행하는 도중 에러가 발생하면 그 즉시 처리를 중단하고 catch 블록으로 제어가 이동한다.
    try {
        // Ajax 연동 결과로 전달되는 JSON 전문은 response.data 로 접근할 수 있다.
        const apiUrl = 'http://itpaper.co.kr/demo/covid19/now.php';
        const response = await axios.get(apiUrl)

        const chartData = {city_name:[],누적확진자: []}
        response.data.state.forEach((v,i) => {
            chartData.city_name[i] = v.region;
            chartData.누적확진자[i] = v.confirmed;
        })
        response.data.chartData = chartData;

        console.group("통신결과");
        console.debug(response);
        console.groupEnd();

        /** 통신처리 --> loading값을 false로, result는 채우고, error는 false로 처리 */
        // 여기서 전달하는 파라미터가 action 함수 안에서 `action.payload`가 된다.
        dispatch(searchSuccessAction({result: response.data}));
    } catch (e) {
        // 에러가 발생했음을 알림 --> loading값을 false로, error는 true로 변경
        dispatch(searchFailureAction());
    }
};