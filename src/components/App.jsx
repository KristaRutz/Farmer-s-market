import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';
import Produce from './Produce';
import Schedule from './Schedule';
import Season from './Season';
import Item from '../Item';
import MarketSchedule from '../MarketSchedule';
import './App.css'

function App() {

  return (
    <React.Fragment>
    <div className="HeadStyle"><Header /></div>
    <div><Body /></div>
    </React.Fragment>
  );
}

export default App;
