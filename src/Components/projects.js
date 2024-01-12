import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import pic from "./../picture1.jpeg";
import Badge from "react-bootstrap/Badge";
import CardF from './card.js'

function Projects() {
  return (
    <Container className='justify-content-center' style={{ marginTop: 3 + "em", marginBottom: 1 + "em" }} >
       <Row  className='justify-content-center'>
       <h1><Badge bg="black"
                  style={{ margin: 0.5 + "em"}}>Projects</Badge></h1>
      </Row>
      <Row  className='justify-content-center' >
        <CardF className={'p1'} title={"Sangeet"} text={"flask music streaming app"} url={"https://github.com/porwalshreyaa/SanGeet"} image={pic}/>
        <CardF  className={'p2'}  title={"VoiZ"} text={"voice desktop assistant"}  url={"https://freecodecamp.org"} image={pic}/>
        <CardF className={'p3'} title={"Mad1-Project"} text={"upcoming project"} url={"https://freecodecamp.org"} image={pic}/>
        <CardF  className={'p4'}  title={"MemoPuzzle"} text={"py-Game"}  url={"https://freecodecamp.org"} image={pic}/>
        <CardF  className={'p5'}  title={"POrtfolio"} text={"code for this portfolio"}  url={"https://freecodecamp.org"} image={pic}/>
      </Row>
     
      
    </Container>
  );
}

export default Projects;
