import React from "react";

function Parents(props) {
    return (
      <div>
        {props.children}
         {props.name}
         {props.surname}
         {props.age}
      </div>
    );
  }
  
  export default Parents;
  