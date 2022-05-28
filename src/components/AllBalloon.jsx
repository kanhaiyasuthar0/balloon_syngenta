import React, { useContext } from "react";
import { BalloonContext } from "../contextapi/BalloonContext";
import Balloon from "./Balloon";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
const AllBalloon = () => {
  const { allBalloon, recBalloon } = useContext(BalloonContext);
  console.log(recBalloon, "recBalloon");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {recBalloon.length > 0 ? (
          <BubbleChartIcon
            style={{
              color: recBalloon[recBalloon.length - 1].color,
            }}
          ></BubbleChartIcon>
        ) : (
          <BubbleChartIcon></BubbleChartIcon>
        )}
        All Balloon{" "}
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        {allBalloon.map((ball, i) => {
          return (
            <div key={i}>
              <Balloon color={ball.color} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBalloon;
