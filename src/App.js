import React from 'react';
import './App.css';
import {Header} from "./components/core/Header";

function App() {
  return (
    <>
      <Header name="John Deere Training" onButtonClick={(e) => alert('Button Clicked')} />
    </>
  );
}

export default App;
