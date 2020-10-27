import React from 'react';

// /src 하위경로
// 현재소스파일기준->상대경로
// 실행시엔 react에 의해 다른경로로 복사
import sample from '../assets/img/sample.png';
import ryan from '../assets/img/ryan.gif';

const InlineCss = () => {
    /**
     * CSS 속성이름은 바닐라스크립트의 property name
     * ex) document.getElementById("hello").style.backgroundColor = "#ff00ff"
     */
    const myStyle = {
        backgroundColor: '#f60',
        width: '150px',
        fontSize: '20px',
        color: 'black',
        padding: '10px 25px',
        marginBottom: '10px'
    }
    return (
        <div>
            <div style={myStyle}>myStyle 적용</div>

            {/* alt 속성이 없으면 경고발생 */}
            <img style={{width:'200px'}} src={sample} alt="이미지넣기"/>

            {/* public 폴더는 절대경로로 참조 */}
            <img src='/logo192.png' alt='abs_path_img'></img>

            {/* css의 배경이미지로 적용 */}
            <span style = {{
                display:'inline-block',
                width: "100px",
                height: "100px",
                backgroundImage:'url(' + ryan + ')',
                backgroundSize:'cover'
            }}></span>
        </div>
    );
};

export default InlineCss;