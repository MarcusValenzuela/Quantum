import React from "react";
import "../App.css";
import Banner from "./Banner";
import { Button } from "./Button";
import "./HeroSection.css";


function HeroSection() {


  return (
    <div className="hero-container">
      <div className="center">
        <p>WELCOME TO</p>
        <h1>QUANTUM</h1>
        <div className="hero-btn">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            <div className="change">TELEGRAM</div>
          </Button>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default HeroSection;
