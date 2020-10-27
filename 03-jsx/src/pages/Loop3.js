import React from 'react';

const Loop3 = () => {
    const season = ['봄','여름','가을','겨울'];
    return (
        <div>
            <table border='1'>
                <tbody>
                    <tr>
                        {season.map((item,index)=>{
                            return (<td key={index}>{item}</td>)
                        })}
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
};

export default Loop3;