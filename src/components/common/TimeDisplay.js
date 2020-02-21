import React from 'react';

const styles = {
  backgroundColor: '#000',
  borderRadius: '0.25rem',
  color: '#fff',
  padding: '0.5rem 0.75rem',
  fontSize: '0.75rem',
  width: '100%',
  maxWidth: '8rem',
  textAlign: 'center'
};

export class TimeDisplay extends React.Component {

  timer;
  timeInterval = 1000;

  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.updateTime();
      }, this.timeInterval);
    }
  }

  stopTimer() {
    if (!!this.timer) {
      clearInterval(this.timer);
    }
  }

  updateTime() {
    const time = new Date().toLocaleTimeString();
    this.setState({time});
  }

  render() {
    return (
      <div style={styles}>
        {this.state.time}
      </div>
    );
  }
}
