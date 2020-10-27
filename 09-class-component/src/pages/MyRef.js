import React, { Component } from "react";

import MyRefSub1 from "../components/MyRefSub1"
import MyRefSub2 from "../components/MyRefSub2"

class MyRef extends Component {
  render() {
    return <div>
      <MyRefSub1></MyRefSub1>
      <MyRefSub2></MyRefSub2>
    </div>;
  }
}

export default MyRef;
