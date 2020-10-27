/**
 *  시,도의 covid19의 상태를 보여주는 page
 *  useEffect 로 page를 열때 covidNowAsync를 dispatch시킨다.
 *  값을 가져오는동안 loader를 보여준다.
 *  가져온 값을 Component로 보내 띄운다.
 */

import React from 'react';

import { useSelector, useDispatch } from "react-redux";

import * as nowReducer from '../reducers/NowReducer';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import CityConfirmAccChart from "../components/CityConfirmAccChart";
import CityStateTable from "../components/CityStateTable";

const CityStatePages = () => {
    const { result,loading, error} = useSelector((store) => {return {...store.nowReducer}})
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(nowReducer.covidNowAsync())
    },[])

    return (
        <div>
            <div className="container containerTop">
                <div className="page-header">
                    <h2>시도별 발생현황</h2>
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
                            <CityConfirmAccChart chartData = {result.chartData}/>
                            <CityStateTable state={result.state}/>
                        </div>)
                    )
                }
            </div>
        </div>
    );
};

export default React.memo(CityStatePages);