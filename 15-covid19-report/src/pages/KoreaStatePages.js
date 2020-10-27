/**
 *  한국,전국의 covid19의 상태를 보여주는 page
 *  useEffect 로 page를 열때 covidNowAsync를 dispatch시킨다.
 *  값을 가져오는동안 loader를 보여준다.
 *  가져온 값을 Component로 보내 띄운다.
 */

import React from 'react';

import { useSelector, useDispatch } from "react-redux";

import * as allReducer from "../reducers/AllReducer";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";

import KoreaConfirmChart from '../components/KoreaConfirmChart';
import KoreaReleaseChart from '../components/KoreaReleaseChart';
import KoreaStateTable from '../components/KoreaStateTable';

const KoreaStatePages = () => {
    const { result,loading, error} = useSelector((store) => {return {...store.allReducer}})
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(allReducer.covidAllAsync())
    },[])
    return (
        <div>
            <div className="container containerTop">
                <div className="page-header">
                    <h2>한국 발생현황</h2>
                </div>
                {loading ? (
                    <Loader type="Bars" color="#00BFFF" height={100} width={100}
                        style={{
                            position: 'absolute', left: "50%", top: "50%", marginLeft: "-50%", marginTop:"-50%",
                        }}
                    />
                    ) : (
                    result && (
                        <div>
                            <KoreaStateTable accState = {result.accState}/>
                            <KoreaConfirmChart chartDataBundle = {result.chartDataBundle}/>
                            <KoreaReleaseChart chartDataBundle = {result.chartDataBundle}/>
                        </div>)
                    )
                }
            </div>
        </div>
    );
};

export default React.memo(KoreaStatePages); // <- 없을시, 켜놓으면 계속 실행 필요할때만 수행