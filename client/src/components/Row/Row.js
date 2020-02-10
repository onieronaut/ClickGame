import React from "react";

const Row = props => {
  return (
  <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />
  );
}

export default Row;
