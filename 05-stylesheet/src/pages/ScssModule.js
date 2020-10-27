import React from 'react';

// import myScssModule from '../assets/scss/style.scss'
import myScssModule from '../assets/scss/style.module.scss'

const ScssModule = () => {
    console.log(myScssModule)
    return (
        <div>
            <div className={myScssModule.myScss}>
                <div className={[myScssModule.myScssBox,myScssModule.red].join(' ')}/>
                <div className={[myScssModule.myScssBox,myScssModule.green].join(' ')}/>
                <div className={[myScssModule.myScssBox,myScssModule.orange].join(' ')}/>
                <div className={[myScssModule.myScssBox,myScssModule.blue].join(' ')}/>
                <div className={[myScssModule.myScssBox,myScssModule.yellow].join(' ')}/>
                <div className={[myScssModule.myScssBox,myScssModule.pink].join(' ')}/>
            </div>
        </div>
    );
};

export default ScssModule;