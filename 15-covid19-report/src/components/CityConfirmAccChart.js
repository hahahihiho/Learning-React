/**
 * chartjs를 통한 차트그리기
 * chartData를 받아서
 * data와 option객체를 만들어서
 * HorizontalBar component에 넣어줌
 */

import React from 'react';

import { Bar,HorizontalBar } from 'react-chartjs-2';

const CityConfirmAccChart = ({chartData}) => {

    const data = {
        labels: chartData.city_name,
        datasets:[
            {
                label: '시도별 누적 확진자 현황',
                backgroundColor: '#14ABDE',
                borderColor: '#15ABDE',
                borderWidth:0,
                hoverBackgroundColor:'#15ABDE',
                hoverBorderColor: '#15ABDE',
                data: chartData.누적확진자,

            }
        ]
    }

    const options = {
        legend: {position:'bottom',},
        scales: {
            xAxes: [{
                gridLines: {display: true}
            }],
            yAxes: [{
                gridLines: {display: false}
            }],
        },
        maintainAspectRatio: false,
    }

    return (
        <div>
            <HorizontalBar
                data={data}
                height={480}
                options={options}
            />
        </div>
    );
};

CityConfirmAccChart.defaultProps = {
    chartData:{
        city_name: [],
        누적확진자: [],
    }
}

export default CityConfirmAccChart;