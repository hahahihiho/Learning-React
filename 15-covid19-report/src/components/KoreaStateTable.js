/**
 * props를 받아서
 * table에 value를 알맞게 정리해서 넣어줌
 */

import React from 'react';
import moment from 'moment';

const KoreaStateTable = (props) => {
    const accState = props.accState
    return (
        <div>
            <h3>누적 확진자 현황 <small>({moment(accState.기준시각).format('M/D h')}시 기준)</small></h3>
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center success'>확진환자</th>
                            <th className='text-center success'>격리해제</th>
                            <th className='text-center success'>격리중</th>
                            <th className='text-center success'>사망자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-conter'>{Number(accState.확진환자).toLocaleString()}</td>
                            <td className='text-conter'>{Number(accState.격리해제).toLocaleString()}</td>
                            <td className='text-conter'>{Number(accState.격리중).toLocaleString()}</td>
                            <td className='text-conter'>{Number(accState.사망자).toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>  
    );
};

// 이게 없으면 초기값이 있더라도, 다른 comp와 시간차가 발생해서 문제발생할 수 있다(?) <= 확인필요
KoreaStateTable.defaultProps = {
    accState: {
        '기준시각': null
        ,'확진환자':0
        ,'격리해제': 0
        ,'격리중': 0
        ,'사망': 0
    }
}

export default KoreaStateTable;