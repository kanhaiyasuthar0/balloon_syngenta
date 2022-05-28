import React, { useContext } from "react";
import { BalloonContext } from "../contextapi/BalloonContext";
import Balloon from "./Balloon";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

const Rectangle = () => {
  const { recBalloon, handleRecRemove } = useContext(BalloonContext);
  return (
    <div
      style={{
        height: "500px",
        width: "500px",
        // border: `3px solid ${
        //   recBalloon.length > 0
        //     ? recBalloon[recBalloon.length - 1].color
        //     : "blue"
        // }`,
        display: "flex",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        Rectangle
        {recBalloon.length > 0 ? (
          <BubbleChartIcon
            style={{
              color: recBalloon[recBalloon.length - 1].color,
            }}
          ></BubbleChartIcon>
        ) : (
          <BubbleChartIcon></BubbleChartIcon>
        )}
      </div>
      {recBalloon.map((balloon, i) => {
        return (
          <div key={i} onClick={() => handleRecRemove(balloon)}>
            {" "}
            <Balloon color={balloon.color} />
          </div>
        );
      })}
      {recBalloon.length > 0 ? (
        <BubbleChartIcon
          style={{
            color: recBalloon[recBalloon.length - 1].color,
          }}
        ></BubbleChartIcon>
      ) : (
        <BubbleChartIcon></BubbleChartIcon>
      )}
    </div>
  );
};

export default Rectangle;
