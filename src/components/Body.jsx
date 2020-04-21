import React from 'react';
import Season from './Season';
import availableProduce from "../Item";

class Body extends React.Component{
  constructor(props) {
    super(props);
    this.state = {month: new Date().getMonth() + 1}
  }

  handleSelect = (event) => {
    //this.setState({month: document.getElementById("selectedMonth")})
    this.setState({month : event.target.value});
  }

  render(){
    console.log(this.state)
  return <div>

    <div>
  <select id="selectedMonth" value={this.state.month} onChange={this.handleSelect}>
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>
    </div>
    <div>
    <Season month={availableProduce[this.state.month-1].month} selection={availableProduce[this.state.month-1].selection}/>
    </div>
  </div>;
  }
}

export default Body;