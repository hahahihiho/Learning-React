import React from 'react'

import PropTypes from 'prop-types'

const MyChildrenSub = ({width,height,children}) => {
    // 각각은 html의 style 속성이름과 동일하게
    const myStyle = {
        width : width +'px',
        height : height + 'px',
        border: '5px solid #d5d5d5',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#eeeeee'
    };
    return (
        <div>
            <h3>MyChilrenSub</h3>
            <div style={myStyle}>{children}</div>
        </div>
    );
};

MyChildrenSub.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.string
}

MyChildrenSub.defaultProps = {
    width: 300,
    height: 100,
    children: 'no contents'
}

export default MyChildrenSub;