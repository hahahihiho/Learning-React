import React from 'react';

/**
 * integrate [useState, useEffect]
 * customize hook
 *  
 */ 

const useMyWidth = () => {
    const [myWidth, setMyWidth] = React.useState(window.innerWidth);
    function onMyResize() {setMyWidth(window.innerWidth)}

    // constructor, destructor를 한번에
    // return 을 합쳐서 사용 가능
    React.useEffect( ()=>{
        window.addEventListener('resize',onMyResize);
        return () => window.removeEventListener('resize',onMyResize);
    },[]);
    
    return myWidth
}

export default useMyWidth;