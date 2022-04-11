import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./Wallets.scss";
import polygon from "../../../assets/polygon1.png";
import { AiOutlineMobile } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { CgArrowRight } from "react-icons/cg";

export default class Wallets extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <section className="wallet-container">
          <p className="wallet-text">Choose Your Wallets</p>

          <section>
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
                <Row className="g-4 wallet-card-container">
                  <Col >
                    <Card className="card"  style={{ backgroundColor: "#1F33D8", padding:"40px"}}>
                      <div className="d-flex align-items-center gap-3">
                        <img
                          width={36}
                          height={32}
                          variant="top"
                          src={polygon}
                          alt="polygon"
                        />
                        <p className="wallet-title">AkaWallet</p>
                      </div>
                      <p className="wallet-card-des" style={{fontWeight:"bolder"}}>
                        AkaMask is a decentralized multi-chain digital wallet,
                        dedicated to providing safe and convenient one-stop
                        digital asset management services to users around the
                        world.
                      </p>
                      <div className="d-flex gap-3 wallet-card-icons  mb-5 mt-1">
                        <AiOutlineMobile />
                        <FiMonitor />
                        <MdLanguage />
                      </div>
                      <div className="d-flex align-items-center gap-3 chose-wallet" style={{backgroundColor:"#0C20CB"}}>
                          <p className="mb-0" style={{fontSize:"18px", fontWeight:"400", color:"#FFFFFF"}}>Chose Wallet</p>
                          <CgArrowRight style={{fontSize:"18px", fontWeight:"600", color:"#FFFFFF"}}/>
                      </div>
                      <div className="rectangle1" style={{backgroundColor:"#0C20CB"}}></div>
                      <div className="rectangle2" style={{backgroundColor:"#0C20CB"}}></div>
                    </Card>
                  </Col>
                </Row>
              ))}
            </Slider>
          </section>
        </section>
      </div>
    );
  }
}
