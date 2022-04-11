import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Provides.scss";

const Provides = () => {
    const me = false;
  return (
    <div className="provides-container">
      <Row className="g-3 g-lg-5 wallet-card-container" xs={1} sm={2} md={2} lg={3}>
        {[0, 1, 2].map(provide =><Col>
          <Card
            className="card"
            style={{ backgroundColor: "#1F33D8" }}
          >
            <div className="d-flex align-items-center">
              <p className="provides-title">Akacoin Community</p>
            </div>
            <p className="provides-card-des" style={{ fontWeight: "bolder" }}>
              There's something for everybody. Follow along, chat on Discord, or
              read up on what we’re doing.
            </p>

            {me && <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7ykypC_2zd64oJoFfcPvkE4a8AcMNWBTVQ&usqp=CAU" height={118} className="w-100" alt="" />
            </div>}

            <div
              className="d-flex align-items-center learn-more"
              style={{ backgroundColor: "#FFD456"}}
            >
              <p
                className="mb-0"
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#0E133A",
                }}
              >
                Learn More
              </p>
            </div>
            <div
              className="provide-rectangle1"
              style={{ backgroundColor: "#0C20CB" }}
            ></div>
            <div
              className="provide-rectangle2"
              style={{ backgroundColor: "#0C20CB" }}
            ></div>
            <div
              className="provide-rectangle3"
              style={{ backgroundColor: "#0C20CB" }}
            ></div>
          </Card>
        </Col>
        )}
      </Row>
    </div>
  );
};

export default Provides;
