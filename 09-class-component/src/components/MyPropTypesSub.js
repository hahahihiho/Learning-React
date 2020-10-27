import React, { Component } from "react";

import PropTypes from "prop-types";

class MyPropTypesSub extends Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hobby: PropTypes.string.isRequired,
  };

  render() {
    const { name } = this.props;
    return (
      <div>
        <h3>MyPropTypesSub</h3>
        <p>
          안녕하세요, 제 이름은 {name} 이고, 나이는 {this.props.age}세 입니다.
        </p>
        <p>
          {this.props.hobby && <span>취미는 {this.props.hobby} 입니다.</span>}
        </p>
      </div>
    );
  }
}

export default MyPropTypesSub;
