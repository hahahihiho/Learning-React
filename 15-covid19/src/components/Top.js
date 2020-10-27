import React from 'react';

import MyNavLink from './MyNavLink'

const Top = () => {
    return (
      <div>
        {/* bootstrap 매뉴바, 색상반전, 상단 고정 */}
        <nav className='navbar navbar-inverse navbar-fixed-top'>
          {/* 매뉴 안에서 컨텐츠 영역 넓이 조정 */}
          <div className='container'>
            {/* 로고 + 모바일 메뉴 버튼 */}
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-tartet='#navbar-collapse'>
                Cov
                <span className='sr-only'>Toggle navigation</span>
                <span className="icon-bar">1</span>
                <span className="icon-bar">1</span>
                <span className="icon-bar"></span>
              </button>
              <a className='navbar-brand' href='/'>코로나 상황판</a>
            </div>
            {/* 메뉴 영역 */}
            {/* collapse가 안먹음..? */}
            <div className='navbar-collapse' id='navbar-collapse'>
              {/* 메뉴 항목 */}
              <ul className="nav navbar-nav">
                {/* <li className={classes}><Link></li> */}
                <MyNavLink to='/korea_state' exact="true" activeClassName='active'>국내발생 현황</MyNavLink>
                <MyNavLink to='/city_state' exact="true" activeClassName='active'>시도별 발생 현황</MyNavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Top;