import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./Header.scss";
import WorldNavIcon from "./WorldNavIcon";
import { GoThreeBars } from "react-icons/go";
import logo from "../../../assets/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header_Bg">
      <section className="container mysterious-behave">
        <div class="header-container">
          {/* Logo */}
          <img src={logo} width={141} height={32} alt="logo" />

          <div id="navigation-bar">
            <nav>
              <ul>
                <li>
                  <a href="#">Ecosystem</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
                <li>
                  <a href="#">What is AKO?</a>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <WorldNavIcon />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* offcanvas */}

      <nav className="mobile-view container">
        <div className="d-flex justify-content-between align-items-center pt-3 pb-2">
          <GoThreeBars
            onClick={handleShow}
            style={{ fontSize: "25px", color: "#0E133A" }}
          />
          <img src={logo} alt="logo" width={130} height={28} />
        </div>

        <Offcanvas className="header_Bg" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={logo} alt="logo" width={130} height={28} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="mysterious-li">
              <ul>
                <li>
                  <a href="#">Ecosystem</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
                <li>
                  <a href="#">What is AKO?</a>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <WorldNavIcon />
                </li>
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </nav>
    </div>
  );
};

export default Header;
