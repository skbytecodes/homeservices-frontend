import { Avatar, Rating } from "@mui/material";
import React from "react";
import "../styles/Feedback.css"

function Feedback() {
  return (
    <div className="feedback">
      <div className="upper-div">
        <div>
          <Avatar alt="Remy Sharp" sx={{ width: 54, height: 54 }} />
          <div className="info-div">
            <p align="left" id="uname">Advik Sarthak</p>
            <i><p align="left" id="uplace">Indiranagar, Bangalore</p></i>
          </div>
        </div>
        <Rating name="read-only" value={4} readOnly />
      </div>
      <div className="bottom-div">
        <p align="left">
          This place is the absolute best! My place was sparkling after they
          were finished every corner was cleaned. Loving my house ten times more
          after they've cleaned. I highly recommend these guys thanks Subhabrata
          !!!
        </p>
      </div>
    </div>
  );
}

export default Feedback;
