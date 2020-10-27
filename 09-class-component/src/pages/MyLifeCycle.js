import React, { Component } from "react";

import face from '../assets/img/react-lifecycle.png';

class MyLifeCycle extends Component {
  // event_handler 를 bind해야하는 불편함 때문에 잘 사용x
  constructor(props){
    console.log('constructor')
    super(props);
    this.state = {
      myBrightness: 100,
      myWidth: window.innerWidth,
    };
  }

  // onResize이벤트와 연결
  onMyResize = () => {
    this.setState({...this.state,myWidth: window.innerWidth})
  }

  // state 갱신객체 반환 or null 반환:갱신x
  // 시간의 흐름에 따라 변하는 props에 state가 의존할때 사용
  // 잘 사용x
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps')
    return state;
  }

  // True/False -> rendor
  shouldComponentUpdate(nextProps, nextState){
    console.log('should comp update')
    console.log(" >> prev: %s, next: %s",this.state.myBrightness, nextState.myBrightness)
    return nextState.myBrightness%3 === 0;
  }

  // this.props, this.state에 접근 가능
  // this.setState()를 event함수가 아닌 그냥 실행시키면,
  // render->setState->render->...(infinite loop)
  render() {
    console.log('rendor')
    return <div>
      <h3>창크기:{this.state.myWidth}</h3>
      <div>
        <input type ='range' min='0' max='200' step='1' value={this.state.myBrightness}
          onChange={e=>{console.log(e);this.setState({...this.state,myBrightness: e.currentTarget.value})}}/>
      </div>
      <img alt="face_img" src={face} width='700'
        style={{
          filter: 'brightness('+this.state.myBrightness+'%)',
        }}
      />
    </div>;
  }

  // render직후 DOM에 반영 직전에 호출
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('get snapshot b update')
    console.log(prevState)
    return prevState
  }

  // update 후
  componentDidUpdate(prevProps,prevState){
    console.log('comp did update')
  }

  // render 이후: to attach js.
  // <body> onload와 비슷
  componentDidMount(){
    console.log('comp did mount')
    window.addEventListener('resize',this.onMyResize);
  }

  // 화면에서 제거될때 (useEffect(()=>{return}))
  componentWillUnmount(){
    console.log('comp will unmount')
    window.removeEventListener('resize',this.onMyResize)
  }
}

export default MyLifeCycle;
