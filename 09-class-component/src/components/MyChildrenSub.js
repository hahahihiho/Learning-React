import React, { Component } from "react";

import PropTypes from "prop-types";

class MyChildrenSub extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([PropTypes.string,PropTypes.object]),
  };

  static defaultProps = {
    width: 300,
    height: 100,
    children: "내용이 없습니다.",
  };

  get myStyle() {
    const { width, height } = this.props;

    return {
      width: width + "px",
      height: height + "px",
      border: "5px solid #d5d5d5",
      padding: "20px",
      margin: "10px",
      backgroundColor: "#eeeee",
    };
  }

  render() {
    return (
      <div>
        <h3>MyChildrenSub</h3>
        <p style={this.myStyle}>{this.props.children}</p>
      </div>
    );
  }
}

export default MyChildrenSub;
