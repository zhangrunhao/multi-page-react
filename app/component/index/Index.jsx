import React from 'react'
import '../../public/css/index.pcss'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }
  tick() {
    // 备注: 当需要直接返回一个对象的时候
    // 避免大括号被解释为函数体.
    this.setState(prevState => {
      return {
        seconds: prevState.seconds + 1
      }
    })
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick()
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="cont">
        <div className="top">
        <div className="bg"></div>
          这是首页: 
        </div>
        <div className="bottom">
          Seconds: {this.state.seconds}
        </div>
      </div>
    );
  }
}

export default Index