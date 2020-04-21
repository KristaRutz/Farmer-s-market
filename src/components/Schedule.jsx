import React from "react";
import PropTypes from "prop-types";

// {  
//   day: "Tuesday",
//   location: "Hillsboro",
//   hours: "5:00pm - 8:30pm",
//   booth: "1F"
// },

function Schedule(props) {
  let hoursMessage = null;
  if (props.schedule.hours == "closed") {
    hoursMessage = (<p className="lead">Avery's Organics will be staying at home today! Catch us on another day.</p>);
  } else {
    hoursMessage = (
    // <div className="row">
    //   <div className="col col-md-6">
    //     <h6 className="lead">Location:</h6>
    //     <h6 className="lead">Hours:</h6>
    //   </div>
    //   <div className="col col-md-3">
    //     <p >{props.schedule.location} Farmer's Market, Booth {props.schedule.booth}</p>
    //     <p >{props.schedule.hours}</p>
    //   </div>
    // </div>
    <div>
        <h6 className="lead">Location:</h6>
        <p >{props.schedule.location} Farmer's Market, Booth {props.schedule.booth}</p>
        <h6 className="lead">Hours:</h6>
        <p >{props.schedule.hours}</p>
    </div>
    );
  }
  return (<React.Fragment>
    <h4>Where will Avery's Organics be today?</h4>
    <h3 className="display-4">{props.schedule.day}s:</h3>
    {hoursMessage}
</React.Fragment>)
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  location: PropTypes.string,
  booth: PropTypes.string
}

export default Schedule;