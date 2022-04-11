import React from "react";
import { CgArrowRight } from "react-icons/cg";
import "./Akacoin.scss";
import VideoPlayer from "react-video-js-player";
import akaCoinImage from "../../../assets/akacoin.png";
import akaCoinVideoThumb from "../../../assets/videoThumb.jpg";
import videoSource from "../../../assets/crypto.mp4";
import { ImPlay3 } from "react-icons/im";

const Akacoin = () => {
  return (
    <div>
      <section className="akacoin-container">
        <p className="akacoin-title">What Is Akacoin?</p>

        <article className="aka-coin-intro">
          <p className="aka-coin-community">
            The fastest growing and community friendly
          </p>
          <div className="aka-coin-blockchain">
            <p>
              Akacoin is the fastest blockchain in the world and the fastest
              growing ecosystem in crypto, with thousands of projects spanning
              DeFi, NFTs, Web3 and more.
            </p>
            <p>
              <span>Explore Ecosystem</span>{" "}
              <span>
                <CgArrowRight />
              </span>
            </p>
          </div>
        </article>
        <article className="aka-coin-video-image mt-2 mt-md-5">
          <div className="aka-image-container">
            <img src={akaCoinImage} className="w-100" alt="" />
          </div>

          <div className="video-container">
            <VideoPlayer
              src={videoSource}
              poster={akaCoinVideoThumb}
              className="video-size w-100"
              playbackRates={[1, 1.5, 1.7, 3]}
            />
            <div className="bottom-left">
              <div>
                <p>Learn Akacoin</p>
                <p>Watch Video</p>
              </div>
              <ImPlay3 style={{ fontSize: "27px" }} />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Akacoin;
