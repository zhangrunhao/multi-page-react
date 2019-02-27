import React from 'react'

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
      <div>
        这是首页w: Seconds: {this.state.seconds}
      </div>
    );
  }
}

export default Index