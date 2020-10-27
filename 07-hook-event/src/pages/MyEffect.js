import React from 'react';



const MyEffect = () => {
    const [mySize, setMySize] = React.useState(320);
    const [myBright, setMyBright] = React.useState(100);

    // const myWidth = useMyWidth();

    // 화면에 등장시에 1회 실행(link로 접속)
    React.useEffect(()=>{console.log("Init Effect : $s ::: load",new Date());}, []);
    // 등잘할때, state,props값이 변경될때마다 실행
    React.useEffect( ()=>{console.log("Update state props %s ::: load,update props or state",new Date()); })
    // 등장, 특정 state, props 값이 변경될때
    React.useEffect( ()=>{console.log("Update brightness : %s ::: load, update specified props or state",new Date());},[myBright]);
    // 다시 렌더링, 컴포넌트 사라지기 직전.
    React.useEffect( ()=>{
        return () => {
            console.log('Close effect : %s ::: update state,rendering,remove the component',new Date());
        };
    });

    return (
        <div>
            <div>
                <div>
                    Size:
                    <input type='range' min='40' max='640' step='1'
                        value={mySize}
                        onChange={e=>{setMySize(e.currentTarget.value);}}
                    />
                </div>
                <div>
                    Brightness:
                    <input type='range' min='0' max='200' step='1'
                        value={myBright}
                        onChange={e=>{setMyBright(e.currentTarget.value);}}
                    />
                </div>
            </div>
            <img alt="Hello" 
                width={mySize}
                style={{filter: "brightness("+myBright+"%)"}}
                src="http://placehold.it/640x480?text=HelloReact"
            />
        </div>
    );
};

export default MyEffect;