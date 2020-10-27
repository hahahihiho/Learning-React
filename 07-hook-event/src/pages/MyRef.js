import React from 'react';

import {withRouter} from 'react-router-dom';

import $ from 'jquery'
/**
 *  React에서 document.getElementId 사용법
 *  ref를 통해, 그 태그를 건들 수 있다.
 */

// props.history 를 가져옴 (Route에 걸려있을때만 사용가능)
const MyRef = ({history}) => {
    const myDname = React.useRef();
    const myLoc = React.useRef();

    const submit = () => {
        const url = "http://itpaper.co.kr/demo/react/api/dept_write.php"
        let param = {dname:myDname.current.value,loc:myLoc.current.value}
        const postCallback = (json) => {
            console.log(json);
            history.push('/state_effect_ex')
        }
        $.post(url,param,(json)=>postCallback(json))
    }
    return (
        <div>
            <div>
                <input ref={myDname} id="dname"/>
                <input ref={myLoc} id="loc"/>
            </div>
            <button onClick={e=>{submit()}}>submit</button>
        </div>
    );
};

export default withRouter(MyRef);