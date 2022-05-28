import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { Button, Tooltip } from "@mui/material";
import { BalloonContext } from "../contextapi/BalloonContext";
// import Tooltip from "@mui/material/Tooltip";
const UserHandle = () => {
  const { handleChange, handleShoot, recBalloon, num } =
    useContext(BalloonContext);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Lets Shoot</div>
      <TextField
        // color="red"
        value={num > 0 ? num : ""}
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={handleChange}
      />
      <Tooltip title="Shoot the Balloon">
        {recBalloon.length > 0 ? (
          <Button
            variant="outlined"
            onClick={handleShoot}
            style={{
              color: recBalloon[recBalloon.length - 1].color,
              border: `2px solid ${recBalloon[recBalloon.length - 1].color}`,
            }}
          >
            {" "}
            Shoot <i class="fa-solid fa-gun"></i>
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleShoot}>
            Shoot <i class="fa-solid fa-gun"></i>
          </Button>
        )}
      </Tooltip>
      {/* <Button></Button> */}
    </div>
  );
};

export default UserHandle;
