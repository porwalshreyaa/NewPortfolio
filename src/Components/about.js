import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "./../picture1.jpeg";
import Badge from "react-bootstrap/Badge";

function About() {
  return (
    <Container>
      <div
        style={{ marginTop: 3 + "em", marginBottom: 1 + "em" }}
        className="div-box container justify-content-center"
      >
        <Row>
          <Col>
            <ul className="justify-content-center">
              <Row>
                <h2>
                  <Badge bg="black">Extracurricular</Badge>
                </h2>
              </Row>
                <Badge
                  bg="light"
                  style={{ margin: 0.5 + "em", color: "black" }}
                >
                  Event - Encryptid 2.0
                </Badge>
                <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                Margazhi, Paradox | IITM
              </Badge>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
              Role - Event Coordinater
              </Badge>
              
              <p>|</p>
              <a href="https://iitmtechsociety.org/" target="_blank"><Badge
                  bg="light"
                  style={{ margin: 0.5 + "em", color: "black" }}
                >
                  Society - Cosmos, IITM Techsociety
                </Badge></a>
                <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                Role - Developement Team Lead
              </Badge>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
              Developed Official website
              </Badge>
              <p>|</p>
              <Badge
                  bg="light"
                  style={{ margin: 0.5 + "em", color: "black" }}
                >
                  Event - Encryptid 
                </Badge>
                <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                Saavan, Paradox | IITM
              </Badge>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
              Role - Event Coordinater
              </Badge>
              <br />
            </ul>
          </Col>

          <br />

          <Col>
            <ul className="justify-content-center">
              <Row>
                <h2>
                  <Badge bg="black">Education</Badge>
                </h2>
              </Row>
              <a href="https://www.iitm.ac.in/" target="_blank">
                <Badge
                  bg="light"
                  style={{ margin: 0.5 + "em", color: "black" }}
                >
                  Indian Institute of Technology Madras
                </Badge>
              </a>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                2026
              </Badge>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
              Bachelor of Science
              </Badge>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                Data Science and Application
              </Badge>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                CGPA: 8.25
              </Badge>{" "}
              <p>|</p>
              <a href="" target="_blank">
                <Badge
                  bg="light"
                  style={{ margin: 0.5 + "em", color: "black" }}
                >
                  Aaradhana HS School | Neemuch
                </Badge>
              </a>
                <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                2021
              </Badge>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                12th | Board of Secondary Education MP
              </Badge>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                Percentage: 93
              </Badge>{" "}
              <p>|</p>
              <a href="" target="_blank">
                <Badge
                  bg="light"
                  style={{ margin: 0.5 + "em", color: "black" }}
                >
                  Carmel Convent Sr Sec School | Neemuch
                </Badge>
              </a>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                2019
              </Badge>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                10th | CBSE
              </Badge>
              <Badge bg="light" style={{ margin: 0.5 + "em", color: "black" }}>
                Percentage: 92.4
              </Badge>{" "}
              <br />
            </ul>
          </Col>
        </Row>

        <br />
      </div>
    </Container>
  );
}

export default About;
