import React from 'react';
import Axios from 'axios';

const DepartmentAdd = ({history}) => {
    const onDepartmentSave = (e) => {
        e.preventDefault()
        const dname = e.currentTarget.dname.value;
        const loc = e.currentTarget.loc.value;
        
        (async function() {
            try{
                const form = new FormData();
                form.append("dname",dname);
                form.append("loc",loc);

                const response = await Axios.post('http://itpaper.co.kr/demo/react/api/dept_write.php',form);
                console.debug('success to connect')
                console.debug(response.data)
                history.push('./department_list')
            } catch(e) {
                console.error(e);
                alert('저장실패')
            }
        })()
    };

    return (
        <div>
            <form onSubmit={onDepartmentSave}>
                <div>
                    학과<input id="dname" name='dname'></input>
                </div>
                <div>
                    위치<input id="loc" name='loc'></input>
                </div>
                <button>저장</button>
            </form>
        </div>
    );
};

export default DepartmentAdd;