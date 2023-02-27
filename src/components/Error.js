import React from "react";

const Error = (props) => {
  return (
    <div className="errorText">
      <h3>{props.msg}</h3>
    </div>
  );
};

export default Error;
