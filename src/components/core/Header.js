import React from 'react';

// illustrating various ways to declare styles in React
const specialButtonStyle = {
  borderRadius: '0.25rem',
  backgroundColor: '#fff'
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
          { props.buttonText }
        </button>
      </div>
    </header>
  );
}
