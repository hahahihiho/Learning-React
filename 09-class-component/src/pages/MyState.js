import React, { Component } from "react";
import MyStateSub1 from "../components/MyStateSub1";
import MyStateSub2 from "../components/MyStateSub2";

class MyState extends Component {
  render() {
    return (
      <div>
        <h2>MyState</h2>
        <MyStateSub1 name="연지" />
        <MyStateSub2 />
      </div>
    );
  }
}

export default MyState;
