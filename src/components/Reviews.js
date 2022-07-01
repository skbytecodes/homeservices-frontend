import { Avatar, Button, Rating } from "@mui/material";
import React from "react";
import "../styles/Reviews.css";

function Reviews() {
  return (
    <div className="reviews">
      <div className="first-reviewdiv">
        <div className="reviews-upperdiv">
          <p id="cr-title">Customer Reviews</p>
          <Rating name="read-only" value={4} readOnly />
          <p id="cr-ratings">232469 reviews</p>
        </div>
        <div className="servicereviews-container">
          <div className="myreview">
            <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }}>
              S
            </Avatar>
            <div className="ratings">
              <p id="username">Mysore Home Repair</p>
              <Rating name="read-only" size="small" value={4} readOnly />
              <p id="ser-rev">Service:Bathroom Cleaning, Reviewer:Arshad</p>
              <p id="rev">Excellent Service</p>
            </div>
            <div className="rdate">
              <p id="rdate">Feb 19, 2022</p>
            </div>
          </div>

          <div className="myreview">
            <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }}>
              S
            </Avatar>
            <div className="ratings">
              <p id="username">Mysore Home Repair</p>
              <Rating name="read-only" size="small" value={4} readOnly />
              <p id="ser-rev">Service:Bathroom Cleaning, Reviewer:Arshad</p>
              <p id="rev">Excellent Service</p>
            </div>
            <div className="rdate">
              <p id="rdate">Feb 19, 2022</p>
            </div>
          </div>


          <div className="myreview">
            <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }}>
              S
            </Avatar>
            <div className="ratings">
              <p id="username">Mysore Home Repair</p>
              <Rating name="read-only" size="small" value={4} readOnly />
              <p id="ser-rev">Service:Bathroom Cleaning, Reviewer:Arshad</p>
              <p id="rev">Excellent Service</p>
            </div>
            <div className="rdate">
              <p id="rdate">Feb 19, 2022</p>
            </div>
          </div>



          <div className="myreview">
            <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }}>
              S
            </Avatar>
            <div className="ratings">
              <p id="username">Mysore Home Repair</p>
              <Rating name="read-only" size="small" value={4} readOnly />
              <p id="ser-rev">Service:Bathroom Cleaning, Reviewer:Arshad</p>
              <p id="rev">Excellent Service</p>
            </div>
            <div className="rdate">
              <p id="rdate">Feb 19, 2022</p>
            </div>
          </div>


          <div className="myreview">
            <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }}>
              S
            </Avatar>
            <div className="ratings">
              <p id="username">Mysore Home Repair</p>
              <Rating name="read-only" size="small" value={4} readOnly />
              <p id="ser-rev">Service:Bathroom Cleaning, Reviewer:Arshad</p>
              <p id="rev">Excellent Service</p>
            </div>
            <div className="rdate">
              <p id="rdate">Feb 19, 2022</p>
            </div>
          </div>


          <div className="myreview">
            <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }}>
              S
            </Avatar>
            <div className="ratings">
              <p id="username">Mysore Home Repair</p>
              <Rating name="read-only" size="small" value={4} readOnly />
              <p id="ser-rev">Service:Bathroom Cleaning, Reviewer:Arshad</p>
              <p id="rev">Excellent Service</p>
            </div>
            <div className="rdate">
              <p id="rdate">Feb 19, 2022</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="home-concierge">
        <p id="con-title">Home Concierge</p>
        <p id="con-para">
          HomeTriangle make it easy to hire the right professional to care for
          your home.
        </p>
        <Button variant="contained" style={{ backgroundColor: "green" }}>
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Reviews;
