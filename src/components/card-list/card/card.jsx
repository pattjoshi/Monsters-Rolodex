import React from "react";

import './card.styles.css';


export const Card = (props) => (
    // functonal component
    <div className="card-container">
        <img
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
            alt="monster" />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
        <p>{props.monster.phone}</p>
    </div>

)

// Qus:- When do we hreak things down into components ?
 // Ans:- Use multiple location
 //       more flexble becouse one component do one things 
      //      state vs props
// Props are used to pass data from one component to another.
// The state is a local data storage that is local to the component only and cannot be passed to other components.
// The this.setState property is used to update the state values in the component.



