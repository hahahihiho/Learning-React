import React from 'react';

import { Bar,HorizontalBar } from 'react-chartjs-2';

const KoreaConfirmChart = ({chartDataBundle}) => {
    // console.log(chartDataBundle)
    const regions = Object.getOwnPropertyNames(chartDataBundle);
    const regionInit = regions[0]; // 전국
    const chartDataInit = chartDataBundle[regionInit];
    const 날짜 = chartDataInit.날짜;
    const 일일확진Init = chartDataInit.확진자;
    const 누적확진Init = chartDataInit.누적확진자;

    const [selectRegion, setSelectRegion] = React.useState(regionInit);
    const [일일확진,set일일확진] = React.useState(일일확진Init.slice());
    const [누적확진,set누적확진] = React.useState(누적확진Init.slice());

    // React.useEffect( (e)=>{
    //     console.log('here');
    //     const target_region = e.currentTarget.value;
    //     const chartData = chartDataBundle[target_region];
    //     setSelectRegion(target_region);
    //     set일일확진(chartData.확진자);
    //     set누적확진(chartData.누적확진자);
    // },[selectRegion]);

    const onChangeRegion = (e) => {
        const target_region = e.currentTarget.value;
        const chartData = chartDataBundle[target_region];
        setSelectRegion(target_region)
        set일일확진(chartData.확진자);
        set누적확진(chartData.누적확진자);
    }

    const data = {
        datasets: [
            {
                label: '일 확진환자',
                type: 'line',
                data: 일일확진,
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
                data: 누적확진,
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
                    labels:날짜
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
                    // ticks:{
                    //     fontColor: '#666',
                    //     fontSize: 10,
                    //     fontFamily: "Lato",
                    //     min: 0,
                    //     max: (function(){
                    //         const maxValue = Math.max.apply(null,누적확진);
                    //         const axisMaxValue = parseInt(maxValue*1.2);
                    //         const max = Math.floor(axisMaxValue/1000)*1000;
                    //         return max;
                    //     })(),
                    //     stepSize: 2000
                    // }
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
                    // ticks:{
                    //     fontColor: '#666',
                    //     fontSize: 10,
                    //     fontFamily: "Lato",
                    //     min: 0,
                    //     max: (function(){
                    //         const maxValue = Math.max.apply(null,일일확진);
                    //         const axisMaxValue = parseInt(maxValue*1.5);
                    //         const max = Math.floor(axisMaxValue/10)*10;
                    //         return max;
                    //     })(),
                    //     stepSize: 10
                    // }
                }
            ],
        }
    }

    return (
        <div>
            <select onChange={onChangeRegion} value={selectRegion}>
                {regions.map((region,index) => <option value={region} key={index}>{region}</option>)}
            </select>
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
};

export default KoreaConfirmChart;