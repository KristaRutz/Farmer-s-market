import React from 'react';
import Season from './Season';
import Schedule from './Schedule';
import availableProduce from "../Item";
import marketSchedule from "../MarketSchedule";

class Body extends React.Component{
  constructor(props) {
    super(props);
    this.state = {month: new Date().getMonth() + 1, day: new Date().getDay()}
  }

  handleSelect = (event) => {
    //this.setState({month: document.getElementById("selectedMonth")})
    this.setState({month : event.target.value});
  }

  render(){
    console.log(this.state)
  return (<div>
    <div>
    <select id="selectedMonth" value={this.state.month} onChange={this.handleSelect}>
      {availableProduce.map((element, index) => (
        <option value={index + 1}>{element.month}</option> 
      ))}
    </select>
    </div>
    <div>
    <Season month={availableProduce[this.state.month-1].month} selection={availableProduce[this.state.month-1].selection}/>
    </div>
    <div>
    <Schedule schedule={marketSchedule[this.state.day]}/>
</div>
  </div>);
  
  
  }
}

export default Body;