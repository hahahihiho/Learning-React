import React, { Component } from "react";

class MyStateSub2 extends Component {
  state = {
    myName: "",
    myPoint: 50,
  };

  onMyNameChnage = (e) => {
    const myData = {
      ...this.state,
      myName: e.currentTarget.value,
    };

    this.setState(myData);
  };

  render() {
    return (
      <div>
        <h3>MyStateSub1</h3>
        <h4>
          {this.state.myName}님의 점수는 {this.state.myPoint}점 입니다.
        </h4>

        <hr />

        <div>
          <label htmlFor="myNameInput"> 이름 : </label>
          <input
            id="myNameInput"
            type="text"
            value={this.state.myName}
            onChange={this.onMyNameChnage}
          />

          <div>
            {" "}
            <label htmlFor="myPointInput"> 점수 : </label>
            <input
              id="myPointInput"
              type="number"
              min="0"
              max="100"
              step="1"
              value={this.state}
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  myPoint: e.currentTarget.value,
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyStateSub2;
