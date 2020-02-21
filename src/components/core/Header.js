import React from 'react';

// illustrating various ways to declare styles in React
const specialButtonStyle = {
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  backgroundColor: '#fff'
};

const insideButtonCircle = {
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '50%',
  backgroundColor: '#333'
};

export function Header(props) {
  return (
    <header className="flex row space-between-center">
      <div style={{fontSize: '1.5rem', fontWeight: '600'}}>
        {props.name}
      </div>
      {props.children}
      <div>
        <button onClick={props.onButtonClick} style={specialButtonStyle}>
          <div style={insideButtonCircle}> </div>
        </button>
      </div>
    </header>
  );
}
