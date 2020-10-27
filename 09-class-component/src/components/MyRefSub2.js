import React, { Component } from "react";

class MyRefSub2 extends Component {
  render() {
    return <div>
      <div>
        이름: <input ref={ref_name => {this.myDname=ref_name}}></input>
      </div>
      <div>
        위치: <input ref={ref => {this.myLoc=ref}}></input>
      </div>
      <div>
        result: <div ref={ref => {this.myResult=ref}}></div>
      </div>
      <button onClick = {e=>{
        // 컴포넌트 참조변수를 사용해서 다른 HTML 태그에 접근가능
        // 참조변수 자체가 해당 HTML을 의미하는 js DOM 객체
        console.log(this.myDname);
        console.log(this.myLoc);
        
        const dname = this.myDname.value;
        const loc = this.myLoc.value;

        this.myResult.innerHTML = dname+","+loc;
      }}>
      출력
      </button>
    </div>;
  }
}

export default MyRefSub2;
