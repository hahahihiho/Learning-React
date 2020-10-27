import React, { Component } from 'react';

import axios from 'axios';

class DepartmentAdd extends Component {

    onDepartmentSave = (e) => {
        e.preventDefault();

        // Route가 적용된 page는 props안에 history 객체 포함.
        const {history} = this.props;

        const dname = e.currentTarget.dname.value;
        const loc = e.currentTarget.loc.value;

        (async () =>{
            try{
                const form = new FormData();
                form.append("dname",dname);
                form.append("loc",loc);

                const response = await axios.post(
                    "http://itpaper.co.kr/demo/react/api/dept_write.php",
                    form
                )
                console.debug("연동성공")
                console.debug(response.data);

            }catch(e){
                console.error(e);
                alert('Could not save data')
            }
        })();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onDepartmentSave}>
                    <div>
                        <input name="dname" id="dname"></input>
                    </div>
                    <div>
                        <input name="loc" id="loc"></input>
                    </div>
                    <button>save</button>
                </form>
            </div>
        );
    }
}

export default DepartmentAdd;