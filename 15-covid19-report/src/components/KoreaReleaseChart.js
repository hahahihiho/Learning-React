/**
 * chartData를 받아서
 * data와 option객체를 만들어서
 * chartjs component에 넣어줌
 * + range 로 period를 조절하여 다양한 기간을 탐색
 */

import React from 'react';

import { Bar,HorizontalBar } from 'react-chartjs-2';

const KoreaReleaseChart = ({chartDataBundle}) => {
    const regions = Object.getOwnPropertyNames(chartDataBundle);
    const regionInit = regions[0]; // 전국
    const {날짜,격리해제,누적격리해제} = chartDataBundle[regionInit];

    const maxIndex = 날짜.length -1;
    // const [data,setData] = React.useState(confirmedChartData);
    const [period,setPeriod] = React.useState(maxIndex);
    const [x,setx] = React.useState(날짜.slice());
    const [l1,setl1] = React.useState(격리해제.slice());
    const [b1,setb1] = React.useState(누적격리해제.slice());

    const onChangePeriod = (e) => {
        let period = e.target.value;
        const tempx = [...날짜];
        const templ = [...격리해제];
        const tempb = [...누적격리해제];
        setPeriod(period);
        setx(tempx.splice(maxIndex-period));
        setl1(templ.splice(maxIndex-period));
        setb1(tempb.splice(maxIndex-period));
    }


    const data = {
        datasets: [
            {
                label: '일 격리해제',
                type: 'line',
                data: l1,
                borderColor: 'blue',
                borderWidth: 2.5,
                pointBorderColor: '#FFFFFF',
                pointBackgroundColor: '#blue',
                pointRadius: 5,
                yAxisID: 'y-axis-2'
            },
            {
                type: 'bar',
                label: '누적격리해제',
                data: b1,
                backgroundColor: 'red',
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
                            const max = Math.floor(axisMaxValue/1000)*1000;
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
                            const max = Math.floor(axisMaxValue/10)*10;
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
            <h3>확진환자 내 일일 및 누적격리해제 추세</h3>
            <h4>기간: ~최근까지</h4>
            <input type="range" min={0} max={maxIndex} onChange={onChangePeriod} value={period}/>
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
};

export default KoreaReleaseChart;