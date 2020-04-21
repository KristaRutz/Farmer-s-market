import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';
import './App.css'

function App() {

  return (
    <React.Fragment>
    <div className="HeadStyle extra-margin"><Header /></div>
    <div><Body /></div>
    </React.Fragment>
  );
}

export default App;
