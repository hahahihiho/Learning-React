import React, { Component } from "react";

class MyPropsSub extends Component {
  render() {
    console.group("MyPropsSub");
    console.dir(this.props);
    console.groupEnd();

    return (
      <div>
          제 이름은 <b>{this.props.name}</b>이고 나이는 <b>{this.props.age}</b>
      </div>
    );
  }
}

MyPropsSub.defaultProps = {
  name: "default_props",
  age: 20,
};

export default MyPropsSub;
