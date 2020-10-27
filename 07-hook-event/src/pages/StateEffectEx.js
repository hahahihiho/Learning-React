import React from 'react';

import $ from 'jquery';



const StateEffectEx = () => {
    const [department,setDepartment] = React.useState([]);
    
    React.useEffect( ()=>{
        $.get("http://itpaper.co.kr/demo/react/api/dept_list.php",{},json=>{
            setDepartment(json.item)
        })
    },[])

    // const onTrClick = e =>{
    //     const current = $(e.currentTarget);
    //     current.css("background-color","#ff0");
    //     $('tr').not(current).css('background-color','#fff');
    // }
    const onTrClick = e =>{
        const cur = e.currentTarget;
        const others = cur.parentNode.childNodes;
        for (let i=0; i<others.length;i++){
            others[i].bgColor="#fff"
        }
        cur.bgColor="#ff0"
    }


    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>dpt no</th>
                        <th>dpt nm</th>
                        <th>dpt loc</th>
                    </tr>
                </thead>
                <tbody>
                    {department.map((item,index)=>{
                        return (
                            <tr key={item.deptno} onClick={onTrClick}>
                                <th>{item.deptno}</th>
                                <th>{item.dname}</th>
                                <th>{item.loc}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>            
        </div>
    );
};

export default StateEffectEx;