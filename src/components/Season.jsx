import React from "react";
import PropTypes from "prop-types";
import Produce from "./Produce";

function Season(props) {
return (<React.Fragment>
  <h2 className="display-4">{props.month}</h2>
  <div className="produce-columns">
    {props.selection.map((item, index) => (
      <p>
        <Produce 
        key={index}
        item={item}
        />
      </p>
    ))}
  </div>
</React.Fragment>)
}

Season.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
}

export default Season;