import React from 'react';

export const notificationStyles = {
  alert: {
    backgroundColor: '#fff799',
    color: '#7f7215',
    border: '0.0625rem solid #7f7215'
  },
  error: {
    backgroundColor: '#ffddcf',
    color: '#7f0a19',
    border: '0.0625rem solid #7f0a19'
  },
  info: {
    backgroundColor: '#dbfff7',
    color: '#00557f',
    border: '0.0625rem solid #00557f'
  },
  success: {
    backgroundColor: '#c8ffc8',
    color: '#107f3a',
    border: '0.0625rem solid #107f3a'
  }
};

function NotificationHeader(props) {
  return (
    <div className="notification-header">
      {props.children}
    </div>
  )
}

export function Notification(props) {
  return (
    <div className="notification" style={props.notificationStyle}>
      {!!props.header && <NotificationHeader>{props.header}</NotificationHeader>}
      {props.children}
    </div>
  );
}
