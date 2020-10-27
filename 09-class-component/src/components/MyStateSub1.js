import React, { Component } from "react";

class MyStateSub1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: "",
      myPoint: 50,
    };

    this.onMyNameChnage = this.onMyNameChnage.bind(this);
  }

  onMyNameChnage(e) {
    let { name } = this.state;

    name = e.currentTarget.value;
    const myData = {
      ...this.state,
      myName: name,
    };

    this.setState(myData);
  }

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
              value={this.state.myPoint}
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

export default MyStateSub1;
