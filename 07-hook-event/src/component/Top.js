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
                <span className='sr-only'>Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className='navbar-brand' href='/'>hello react</a>
            </div>
            {/* 메뉴 영역 */}
            <div className='collapse navbar-collapse' id='navbar-collapse'>
              {/* 메뉴 항목 */}
              <ul className="nav navbar-nav">
                {/* <li className={classes}><Link></li> */}
                <MyNavLink to='/page1' activeClassName='active'>page1</MyNavLink>
                <MyNavLink to='/page2' activeClassName='active'>page2</MyNavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Top;