import React, { Component } from "react";
import NondiscDoH from "../images/NondiscDoH.pdf"

class EndoscopyCenter extends Component {
    render() {
      return (
        <>
            <p align="center"><font size="7">Endoscopy Center</font></p>
            <p align="center"><font size="6">of Central Pennsylvania, L.L.C.</font></p>
            <p align="center"><font size="5">1421 Fishburn Road</font></p>
            <p align="center"><font size="5">Hershey, PA&nbsp;&nbsp; 17033</font></p>
            <p align="center">&nbsp;</p>
            <p align="center"><font size="5"><a href="tel:7178352727" className="blueLink">717-835-2727</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Fax 717-533-2164</font></p>

            <p align="center"><a className="blueLink" href="/jcaho">JCAHO Accreditation Notice</a></p>
            <p align="center"><a className="blueLink" href={NondiscDoH}>Nondiscrimination Notice</a></p>

            <p align="left"><a href="index.html">Home</a></p>
            <p>&nbsp;</p>
        </>
      );
    }
  }
   
  export default EndoscopyCenter;