import React from 'react';

import axios from 'axios';

const DepartmentList = () => {
    
    const [department, setDepartment] = React.useState([]);

    React.useEffect(()=>{
        onButtonClick()
    },[])

    const myKeywordInput = React.useRef();
    const onButtonClick = (e) => {
        (async function() {
            console.group('Ajax')
            let params = { keyword: myKeywordInput.current.value, page:1}
            const headers = {}
            try{
                const response = await axios.get('http://itpaper.co.kr/demo/react/api/dept_list.php',{
                    params: params,
                    headers: headers
                })
                console.log("fdsag",response.data.item)
                setDepartment(response.data.item)
            }catch(error) {
                console.log('error',error)
            }

            console.groupEnd('Ajax')
        })() // 즉시실행 (funcion(){...})()
    }

    return (
        <div>
            <h2>학과목록</h2>
            <form>
                <input type="text" name="keyword" ref={myKeywordInput} />
                <button type="button" onClick={onButtonClick}>검색</button>
            </form>
            <table border = "1">
                <thead>
                    <tr>
                        <td>deptno</td>
                        <td>dname</td>
                        <td>loc</td>
                    </tr>
                </thead>
                <tbody>
                    {department.length > 0 ? 
                        department.map((item,index) => {
                            return (
                                <tr key = {item.deptno}>
                                    <td>{item.deptno}</td>
                                    <td>{item.dname}</td>
                                    <td>{item.loc}</td>
                                </tr>
                            );
                        }):
                        <tr>
                            <td colSpan='3' align='center'>
                                검색결과 x
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DepartmentList;