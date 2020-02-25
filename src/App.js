import React from 'react';
import './App.css';
import {Header} from "./components/core/Header";
import {Notification, notificationStyles} from "./components/core/Notification";
import {TimeDisplay} from "./components/common/TimeDisplay";
import {UserList} from "./components/UserList";

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
          <button className="btn-primary" onClick={this.toggleNotification}>
            {this.state.showNotification ? 'Hide Notification' : 'Show Notification'}
          </button>
          {
            this.state.showNotification &&
            <Notification
              header={<ExampleNotificationHeader />}
              notificationStyle={notificationStyles.info}
            >
              <p>Notification Custom Content</p>
              <p>More Custom Content</p>
            </Notification>
          }
          <UserList />
        </div>
      </>
    );
  }
}

export default App;
