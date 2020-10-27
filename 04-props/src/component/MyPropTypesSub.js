import React from 'react';

// -> https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html
// 값을 체크하고 warning을 띄워줌
import PropTypes from 'prop-types'

// const MyPropTypesSub = (props) => {
//     const {name, age, hobby} = props;
const MyPropTypesSub = ({name,age,hobby}) => {
    return (
        <div>
            <h3>=========</h3>
            <p>
                이름 : {name}, 나이 : {age}.
            </p>
            <p>
                {hobby && (<span>취미 : {hobby} </span>)}
            </p>
            
        </div>
    );
};
MyPropTypesSub.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hobby: PropTypes.string.isRequired
}

export default MyPropTypesSub;