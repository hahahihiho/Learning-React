import React from 'react';

const Loop2 = () => {
    const myArray = ['hello','world'];
    // identical 한 key값이 필요하다
    const myArrayItem = myArray.map( (item,index) => {
        return <li key={index}>{item}</li>
    })

    return (
        <div>
            <ul>{myArrayItem}</ul>
        </div>
    );
};

export default Loop2;