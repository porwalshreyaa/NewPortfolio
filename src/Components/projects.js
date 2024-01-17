import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import voiz from "./../voiz.jpeg";
import portfolio from "./../portfolio.jpeg";
import sangeet from "./../sangeet.jpeg";
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
        <CardF className={'p1'} title={"SanGit"} text={"flask music streaming app"} url={"https://github.com/porwalshreyaa/SanGit"} image={sangeet}/>
        <CardF  className={'p2'}  title={"VoiZ"} text={"voice desktop assistant - in progress"}  url={"https://github.com/porwalshreyaa/Voiz/"} image={voiz}/>
        {/* <CardF className={'p3'} title={"Mad1-Project"} text={"upcoming project"} url={""} image={pic}/> */}
        {/* <CardF  className={'p4'}  title={"MemoPuzzle"} text={"py-Game"}  url={""} image={pic}/> */}
        <CardF  className={'p5'}  title={"Portfolio"} text={"this portfolio"}  url={"https://github.com/porwalshreyaa/NewPortfolio"} image={portfolio}/>
        <CardF  className={'p6'}  title={"Geeki"} text={"a gadget wiki for students - in progress"}  url={"https://github.com/porwalshreyaa/geeki/"} image={voiz}/>
        <CardF  className={'p7'}  title={"StudyBuddy"} text={"a study-buddy matchmaker for students - in progress"}  url={"https://github.com/porwalshreyaa/studybuddy/"} image={voiz}/>
      </Row>
     
      
    </Container>
  );
}

export default Projects;
