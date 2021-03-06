import React from 'react';

class Seconds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }
  tick() {
    // 备注: 当需要直接返回一个对象的时候
    // 避免大括号被解释为函数体.
    this.setState(preState => ({
      seconds: preState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="cont">
        <div className="top">
          <i className="bg"></i>
          这是{this.props.title}
        </div>
        <div className="botton">
          Seconds: {this.state.seconds}
        </div>
      </div>
    )
  }
}

export default Seconds;