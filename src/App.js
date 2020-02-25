import React from 'react';
import './App.css';
import {Header} from "./components/core/Header";
import {Notification, notificationStyles} from "./components/core/Notification";
import {TimeDisplay} from "./components/common/TimeDisplay";
import { UsersController } from './components/users/UsersController';

// Just sample component to display how it can be passed in through props
function ExampleNotificationHeader() {
  return (
    <div>Notification Header</div>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showNotification: true,
      showTime: true
    };

    this.toggleNotification = this.toggleNotification.bind(this);
  }

  toggleNotification() {
    const showNotification = !this.state.showNotification;
    this.setState({showNotification});
  }

  toggleTime() {
    const showTime = !this.state.showTime;
    this.setState({showTime});
  }

  render() {
    return (
      <>
        <Header
          name="John Deere Training"
          onButtonClick={(e) => this.toggleTime()}
          buttonText={this.state.showTime ? 'Hide Time' : 'Show Time'}
        >
          { this.state.showTime && <TimeDisplay /> }
        </Header>
        <div className="content">
          <UsersController />
        </div>
      </>
    );
  }
}

export default App;
