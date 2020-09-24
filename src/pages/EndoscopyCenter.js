import React, { Component } from "react";
import NondiscDoH from "../images/NondiscDoH.pdf"
import EndoCenterPic from "../images/ECCPpic.jpg"
class EndoscopyCenter extends Component {
    render() {
      return (
        <>
            <p align="center"><font size="7">Endoscopy Center</font></p>
            <p align="center"><font size="6">of Central Pennsylvania, L.L.C.</font></p>
            <p align="center"><font size="5">1421 Fishburn Road, Hershey, PA 17033</font></p>
            <p align="center"><font size="5"><a href="tel:7178352727" className="blueLink">717-835-2727</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Fax 717-533-2164</font></p>
            <img src={EndoCenterPic} style={{width: "100%"}} alt="Endo center pic"/>
            <p align="center"><a className="blueLink" href="/jcaho">JCAHO Accreditation Notice</a></p>
            <p align="center"><a className="blueLink" href={NondiscDoH}>Nondiscrimination Notice</a></p>
            
            
            <p>&nbsp;</p>
        </>
      );
    }
  }
   
  export default EndoscopyCenter;