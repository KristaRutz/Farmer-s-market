import React from "react";

// {  
//   month: "January",
//   selection: [  
//      "Apples",
//      "Hazelnuts",
//      "Pears",
//      "Garlic",
//      "Mushrooms",
//      "Onions",
//      "Potatoes",
//      "Turnips"
//   ]
// },

function Season(props) {
return (<React.Fragment>
  <h2>{props.month}</h2>
</React.Fragment>)
}

export default Season;