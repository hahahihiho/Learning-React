import React, { Component } from 'react';

import axios from 'axios';

class DepartmentList extends Component {
    state = { department:[] };
    myKeywordInput = React.createRef();

    onButtonClick = (e) => {
        const current = this;
        (async function() {
            let params = { keyword: current.myKeywordInput.current.value, page:1}
            try{
                const response = await axios.get('http://itpaper.co.kr/demo/react/api/dept_list.php',{
                    params: params,
                })
                current.setState({department: response.data.item});
                // console.log(current.state)
            }catch(e){
                console.error(e);
                alert("ajax 실패")
            }
        })();
    };

    componentDidMount(){ this.onButtonClick() }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <input ref={this.myKeywordInput}/>
                        <button onClick={this.onButtonClick}>검색</button>
                    </div>
                </form>
                <table border="1">
                    <thead>
                        <tr>
                            <th>학과번호</th>
                            <th>학과명</th>
                            <th>위치</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.department.length > 0 ? (
                            this.state.department.map((item,index) => {
                                return(
                                    <tr key={item.deptno}>
                                        <td>{item.deptno}</td>
                                        <td>{item.dname}</td>
                                        <td>{item.loc}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="3" align="center"> 검색결과 x </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DepartmentList;