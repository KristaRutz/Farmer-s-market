import React from "react";
import PropTypes from "prop-types";

// {  
//   day: "Tuesday",
//   location: "Hillsboro",
//   hours: "5:00pm - 8:30pm",
//   booth: "1F"
// },

function Schedule(props) {
return (<React.Fragment>
  <h1>Where will Avery's Organics be today?</h1>
  <h2>{props.schedule.day}s:</h2>
  <h2>{props.schedule.location}</h2>
  <h2>{props.schedule.hours}</h2>
  <h2>{props.schedule.booth}</h2>
</React.Fragment>)
}

Schedule.propTypes = {

}

export default Schedule;