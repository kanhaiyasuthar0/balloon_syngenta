import React from "react";

const Gif = () => {
  return (
    <div
      style={{
        background: `url("./Balloons.gif")`,
        minHeight: "100px",
        height: "500px",
        // backgroundPosition: "cover",
        backgroundSize: "cover",
        // border: "1px solid red",
        minWidth: "350px",
        position: "absolute",
        top: "150px",
        right: "100px",
      }}
    ></div>
  );
};

export default Gif;
