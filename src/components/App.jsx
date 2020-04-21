import React from 'react';
import Header from './Header';
import Produce from './Produce';
import Schedule from './Schedule';
import Season from './Season';
import Item from '../Item';
import MarketSchedule from '../MarketSchedule';


// CSS
  const HeadStyle = {
    width: "100%",
    border: "2px solid green",
  }

function App() {

  return (
    <React.Fragment>
    <div style={HeadStyle}><Header /></div>
    <Season month="April" />
    <Schedule day="Tuesday" />
    </React.Fragment>
  );
}

export default App;
