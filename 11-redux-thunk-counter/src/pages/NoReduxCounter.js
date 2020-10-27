import React from 'react';

const NoReduxCounter = (props) => {
    const [number, setNumber] = React.useState(0);
    const [color, setColor] = React.useState('#000');
    const onAddClick = (payload) => {
        const currentNumber = number + payload;
        const currentColor = currentNumber > 0 ? '#2f77eb': (currentNumber < 0 ? '#f60' : '#000')
        setNumber(currentNumber);
        setColor(currentColor);
    }
    const onResetClick = () => {
        setNumber(0);
        setColor("#000")
    }
    return (
        <div>
            <h2>Counter without Redux</h2>
            <h3 style={{color:color}}>{number}</h3>
            <div>
                <button onClick={(e) => onAddClick(3)}>+3</button>
                <button onClick={(e) => onAddClick(-1)}>-1</button>
                <button onClick={(e) => onResetClick()}>reset</button>
            </div>
        </div>
    );
};

export default NoReduxCounter;