import React from 'react';
import './App.css';
import {Header} from "./components/core/Header";
import {Notification, notificationStyles} from "./components/core/Notification";

// Just sample component to display how it can be passed in through props
function ExampleNotificationHeader() {
  return (
    <div>
      Notification Header
    </div>
  );
}

function App() {
  return (
    <>
      <Header name="John Deere Training" onButtonClick={(e) => alert('Button Clicked')} />
      <Notification
        header={<ExampleNotificationHeader />}
        notificationStyle={notificationStyles.info}
      >
        <p>Notification Custom Content</p>
        <p>More Custom Content</p>
      </Notification>
    </>
  );
}

export default App;
