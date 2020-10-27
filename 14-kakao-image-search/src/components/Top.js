import React from 'react';

// page 이동기능 사용하기
import { withRouter } from 'react-router-dom';


const Top = ({history,match}) => {
    const onQuerySubmit = (e) =>{
        e.preventDefault();

        const form = e.currentTarget;

        const query = form.query.value;

        // page이동기능
        history.push("/"+query);
    };
    return (
        <div>
            {/* bootstrap 메뉴바, 색상반전, 상단 고정 */}
            <nav className='navbar navbar-inverse navbar-fixed-top'>
                {/* 메뉴 안에서의 컨텐츠 영역 넓이 조정 */}
                <div className='container'>
                    {/* 로고 + 모바일 메뉴 버튼 */}
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <a className='navbar-brand' href='/'>이미지 검색</a>
                    </div>

                    {/* 메뉴 영역 */}
                    <div className='collapse navbar-collapse' id='navbar-collapse'>
                        {/* action="http://www.naver.com" 이라고하면 그 page로 이동후 query 검색 */}
                        {/* action에 아무것도 없을시 현재 page를 새로고치면서 이동 */}
                        <form className='navbar-form navbar-right' onSubmit={onQuerySubmit}>
                            <div className='form-group'>
                                <div className='input-group'>
                                    <input type='search' name='query' defaultValue={match.params.query} className='form-control'/>
                                    <span className='input-group-btn'>
                                        <button type='submit' className='btn btn-primary'>검색</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

// 페이지 이동 기능 사용하기 (2)
export default withRouter(Top);
