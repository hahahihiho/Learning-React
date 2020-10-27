import React from 'react';
import MyState from './MyState';

/**
 * Date class => string
 * @param {object} date
 * @returns {string} string
 */

const getDateString = date =>{
    if (date===undefined){
        date = new Date();
    }
    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const str = yy + '-' + (mm<10 ? '0' + mm : mm) + '-' + (dd<10 ? '0'+dd : dd);
    return str
}

//moment ref: https://momentjs.com/docs/#/displaying/
// import moment from 'moment'
// startDate:moment().format("YYYY-MM-DD"),
// endDate:moment().format("YYYY-MM-DD")

const DateRange1 = () => {

    // hook
    const [myDate, setMyDate] = React.useState({
        startDate:getDateString(),
        endDate:getDateString()
    });

    const startDateMover = (date,n) => {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() + n)
        setMyDate({ ...myDate,startDate:getDateString(startDate)})
    }
    const endDateMover = (date,n) => {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + n)
        setMyDate({ ...myDate,endDate:getDateString(endDate)})
    }

    return (
        <div>
            <p>{myDate.startDate}~{myDate.endDate}</p>
            <p>
                <input 
                    type='range' min='0' max='100' step='1'
                    onChange={e=>{startDateMover(null,-e.currentTarget.value)}}
                />
                <button onClick={ e=>{startDateMover(null,-7)}}>7day</button>
                <button onClick={ e=>{startDateMover(null,-10)}}>10day</button>
                <button onClick={ e=>{startDateMover(null,-15)}}>15day</button>
                <button onClick={ e=>{startDateMover(null,-30)}}>30day</button>
            </p>
        </div>
    );
};

export default DateRange1;