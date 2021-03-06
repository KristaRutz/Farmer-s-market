import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return <><span className="produce-item">{props.item}</span></>;
}

Produce.propTypes = {
  item: PropTypes.string.isRequired
}

export default Produce;