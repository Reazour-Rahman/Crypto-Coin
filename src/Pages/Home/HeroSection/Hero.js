import React from "react";
import { Button } from "react-bootstrap";
import "../../Shared/Header/Header.scss";
import "./Hero.scss";
import { AiFillGithub } from "react-icons/ai";
import tree from "../../../assets/bitcoin-tree.png";
import pettyCoin from "../../../assets/Bitcoin.png";

const Hero = () => {
  return (
    <main className="header_Bg">
      <div className="container hero-container">
        {/* Title , description, btn */}
        <section>
          <p>
            <span style={{color: "#0E133A"}}>Introducing</span> <span style={{color: "#1F33D8"}}>AKA</span>
            <span style={{color:"#FFCD37"}}>COIN</span>
          </p>
          <p>
            Living Ecosystem
            Decentralized Token
          </p>
          <p>
            Akacoin is a open source peer-to-peer digital currency,community-run
            technology that supports cryptocurrencies and thousands of
            decentralized applications.
          </p>

          <div className="social-button">
            <Button className="hero-button started" variant="primary">
              Get Started
            </Button>
            <Button className="hero-button git" variant="primary">
              <span className="github-button">
                <AiFillGithub />{" "}
                <span style={{ marginLeft: "8px" }}>Source</span>
              </span>
            </Button>
          </div>
        </section>

        {/* Aka coin tress */}
        <section>
          <section className="frame ">
            <div className="photo"> 
              <img src={tree}  alt="bitcoin" />
            </div>
            <div className="bitcoins1">
                <img src={pettyCoin} alt="" />
            </div>
            <div className="bitcoins2">
                <img src={pettyCoin} alt="" />
            </div>
            <div className="bitcoins3">
                <img src={pettyCoin} alt="" />
            </div>
            <div className="bitcoins4">
                <img src={pettyCoin} alt="" />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Hero;
