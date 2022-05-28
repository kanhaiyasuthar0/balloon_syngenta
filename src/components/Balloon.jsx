import React from "react";

const Balloon = ({ color }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: color,
          borderRadius: "50%",
          height: "50px",
          width: "50px",
          border: "2px solid black",
        }}
      ></div>
    </>
  );
};

export default Balloon;
