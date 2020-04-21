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

  handleDaySelect = (event) => {
    this.setState({day: event.target.value})
  }

  render(){
    console.log(this.state)
  return (
  
  <div className="">

    <div className="row">
      {/* Day Selector */}
      <div className="form-group col">
        <label for="selectedDay">View hours and location on another day:</label>
        <select className="form-control" id="selectedDay" value={this.state.day} onChange={this.handleDaySelect}>
          {marketSchedule.map((element, index) => (
            <option value={index}>{element.day}</option> 
          ))}
        </select>
      </div>
      {/* Month Selector */}
      <div className="form-group col">
        <label className="" for="selectedMonth">View produce in another month:</label>
        <select className="form-control" id="selectedMonth" value={this.state.month} onChange={this.handleSelect}>
          {availableProduce.map((element, index) => (
            <option value={index + 1}>{element.month}</option> 
          ))}
        </select>
      </div>
    </div>

    {/* Today's schedule */}
    <div className="text-center extra-margin"> 
      <Schedule schedule={marketSchedule[this.state.day]}/>
    </div>
    
    {/* Produce of selected month */}
    <div className="text-center extra-margin">
      <Season month={availableProduce[this.state.month-1].month} selection={availableProduce[this.state.month-1].selection}/>
    </div>

  </div>
  
  );
  
  
  }
}

export default Body;