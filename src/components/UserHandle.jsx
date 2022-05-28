import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { BalloonContext } from "../contextapi/BalloonContext";

const UserHandle = () => {
  const { handleChange, handleShoot, recBalloon } = useContext(BalloonContext);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Lets Shoot</div>
      <TextField
        // color="red"

        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={handleChange}
      />
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

      {/* <Button></Button> */}
    </div>
  );
};

export default UserHandle;
