import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


let now = new Date();
  let year = now.getFullYear();


  function Footer (){
    return(
       

  <footer fixed=" bottom" style={{marginBottom:0}} className="footer mt-auto"> shreya@portfolio:~$ sudo copyright-{year}  - -made-with-patience</footer>
    
       
    )
  }




  export default Footer;