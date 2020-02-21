import React from 'react';
import './App.css';
import {Header} from "./components/core/Header";
import {Notification, notificationStyles} from "./components/core/Notification";

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
      showNotification: true
    };

    this.toggleNotification = this.toggleNotification.bind(this);
  }

  toggleNotification() {
    const showNotification = !this.state.showNotification;
    this.setState({showNotification});
  }

  render() {
    return (
      <>
        <Header name="John Deere Training" onButtonClick={(e) => alert('Button Clicked')} />
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

      </>
    );
  }
}

export default App;
