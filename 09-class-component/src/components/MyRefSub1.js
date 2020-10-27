import React, { Component } from "react";

class MyRefSub1 extends Component {
  // React.CreateRef() 함수를 통해 참조변수 생성
  // 각각의 ref에 객체 할당
  // render 안 this로 접근
  myDname = React.createRef();
  myLoc = React.createRef();
  myResult = React.createRef();
  render() {
    return <div>
      <div>
        이름: <input ref={this.myDname}></input>
      </div>
      <div>
        위치: <input ref={this.myLoc}></input>
      </div>
      <div>
        result: <div ref={this.myResult}></div>
      </div>
      <button onClick = {e=>{
        console.log(this.myDname);
        console.log(this.myLoc);
        
        const dname = this.myDname.current.value;
        const loc = this.myLoc.current.value;

        this.myResult.current.innerHTML = dname+","+loc;
      }}>
      출력
      </button>
    </div>;
  }
}

export default MyRefSub1;
