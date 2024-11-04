import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className={props.buttonStyle}>{props.buttonText}</button>
    </div>
  );
};

export default Button;
