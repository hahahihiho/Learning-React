import React from 'react';

/**
 * state
 * -const [name,setter] = React.useState(default_value);
 * -state 값은 setter를 통해서만 변경가능
 * - useState() 함수로 initialization
 * 
 */

const MyState = () => {
    const [myName, setMyName] = React.useState('');
    const [myPoint, setMyPoint] = React.useState(50);

    const onMyNameChange = e => {
        // e.currentTarget은 jquery 의 $(this)
        setMyName(e.currentTarget.value);
    };
    const onMyPointChange = e => { setMyPoint(e.currentTarget.value);}

    return (
        <div>
            <h2>MyState</h2>
            {/* state는 변수값으로 사용 */}
            {myName}님, your score is {myPoint}.
            <div>
                <label htmlFor='myNameInput'>이름: </label>
                <input id='myNameInput' type='text' value={myName} onChange={onMyNameChange}/>
            </div>
            <div>
                <label htmlFor="myPointInput">점수: </label>
                <input
                    id='myPointInput'
                    type='range' min='0' max='100' step='0.2'
                    value = {myPoint}
                    onChange={ onMyPointChange }
                />
            </div>
        </div>
    );
};

export default MyState;