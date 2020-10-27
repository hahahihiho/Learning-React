/**
 * chartData를 받아서
 * data와 option객체를 만들어서
 * chartjs component에 넣어줌
 * + select 로 지역별 확인
 * + range 로 period를 조절하여 다양한 기간을 탐색
 */

import React from 'react';

import { Bar,HorizontalBar } from 'react-chartjs-2';

const KoreaConfirmChart = ({chartDataBundle}) => {
    const regions = Object.getOwnPropertyNames(chartDataBundle);
    const regionInit = regions[0]; // 전국
    const {날짜,확진자,누적확진자} = chartDataBundle[regionInit];
    const maxIndex = 날짜.length -1;

    const [period,setPeriod] = React.useState(maxIndex);
    const [cityData,setCityData] = React.useState(chartDataBundle[regionInit]);
    const [x,setx] = React.useState(날짜.slice());
    const [l1,setl1] = React.useState(확진자.slice());
    const [b1,setb1] = React.useState(누적확진자.slice());
    const [selectRegion, setSelectRegion] = React.useState(regionInit);


    const onChangePeriod = (e) => {
        let period = e.target.value;
        updateChangedPeriod(period);
    }

    const updateChangedPeriod = (period) =>{
        const tempx = [...cityData.날짜];
        const templ = [...cityData.확진자];
        const tempb = [...cityData.누적확진자];
        tempx.splice(period);
        templ.splice(period);
        tempb.splice(period);
        setPeriod(period);
        setx(tempx);
        setl1(templ);
        setb1(tempb);
    }

    const onChangeRegion = (e) => {
        const target_region = e.currentTarget.value;
        const chartData = chartDataBundle[target_region];
        setSelectRegion(target_region)
        setCityData(chartData);
        const templ = [...chartData.확진자];
        const tempb = [...chartData.누적확진자];
        templ.splice(period)
        tempb.splice(period)
        setl1(templ);
        setb1(tempb);
        // updateChangedPeriod(period);
    }

    const data = {
        datasets: [
            {
                label: '일 확진환자',
                type: 'line',
                data: l1,
                borderColor: '#FF8400',
                borderWidth: 2.5,
                pointBorderColor: '#FFFFFF',
                pointBackgroundColor: '#FF8400',
                pointRadius: 6,
                yAxisID: 'y-axis-2'
            },
            {
                type: 'bar',
                label: '누적확진환자',
                data: b1,
                backgroundColor: '#3571CC',
                yAxisID: 'y-axis-1'
            }
        ]
    }

    const options = {
        responsive: true,
        elements: {
            line: {
                fill: false,
            },
        },
        legend: {
            position: 'bottom'
        },
        scales: {
            xAxes: [
                {
                    display:true,
                    gridLines:{
                        display:false,
                    },
                    labels:x
                }
            ],
            yAxes: [
                {
                    id:'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    girdLines:{
                        display: true
                    },
                    labels:{
                        show:true,
                    },
                    ticks:{
                        fontColor: '#666',
                        fontSize: 10,
                        fontFamily: "Lato",
                        min: 0,
                        max: (function(){
                            const maxValue = Math.max.apply(null,b1);
                            const axisMaxValue = parseInt(maxValue*1.2);
                            const max = Math.ceil(axisMaxValue);
                            return max;
                        })(),
                        stepSize: 2000
                    }
                },
                {
                    id:'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right',
                    girdLines:{
                        display: true
                    },
                    labels:{
                        show:true,
                    },
                    ticks:{
                        fontColor: '#666',
                        fontSize: 10,
                        fontFamily: "Lato",
                        min: 0,
                        max: (function(){
                            const maxValue = Math.max.apply(null,l1);
                            const axisMaxValue = parseInt(maxValue*1.5);
                            const max = Math.ceil(axisMaxValue);
                            return max;
                        })(),
                        stepSize: 10
                    }
                }
            ],
        }
    }

    return (
        <div>
            <h3>일일 및 누적 확진환자 추세</h3>
            <h4>지역</h4>
            <select onChange={onChangeRegion} value={selectRegion}>
                {regions.map((region,index) => <option value={region} key={index}>{region}</option>)}
            </select>
            <h4>기간: 시작부터~</h4>
            <input type="range" min={0} max={maxIndex} onChange={onChangePeriod} value={period}/>
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
};

export default KoreaConfirmChart;