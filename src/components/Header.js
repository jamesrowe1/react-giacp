import React from "react"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Jumbotron from "react-bootstrap/Jumbotron"

class Header extends React.Component {
  render() {
    return (
        <>
        <header>

    <Jumbotron>
        <h1>Gastroenterology Associates</h1>

        <h2>
            Of Central Pennsylvania, P.C.
        </h2>

    <h4><a href="tel:7175332224">717-533-2224</a></h4>
    <div className="col-md-12" id="mobileInfo">M-F 8am-4:30pm</div>
    <div className="col-md-12" id="mobileInfo">Located at <a href="https://www.google.com/maps/place/1421+Fishburn+Rd,+Hershey,+PA+17033/@40.2635221,-76.643866,17z/data=!3m1!4b1!4m5!3m4!1s0x89c8bb554e9f3b0d:0x915a9051a0a0bff6!8m2!3d40.263518!4d-76.6416773" rel="noopener noreferrer" target="_blank">1421 Fishburn Road, Hershey, PA 17033</a> </div>


    <DropdownButton as={ButtonGroup} id="dropdown-basic-button" variant="danger" title="Navigation">
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item href="/associates">Associates</Dropdown.Item>
        <Dropdown.Item href="/contactus">Patient Portal</Dropdown.Item>
        <Dropdown.Item href="/insurance">Insurance</Dropdown.Item>
        <Dropdown.Item href="/directions">Directions</Dropdown.Item>
        <Dropdown.Item href="/screeningcolonoscopy">Screening Colonoscopy</Dropdown.Item>
        <Dropdown.Item href="/endoscopycenter">Endoscopy Center</Dropdown.Item>
    </DropdownButton>
    <DropdownButton as={ButtonGroup} id="dropdown-basic-button" variant="danger" title="Procedures">
        <Dropdown.Item href="/screeningcolonoscopy">Screening Colonoscopy</Dropdown.Item>
        <Dropdown.Item href="/upperendoscopy">Upper Endoscopy</Dropdown.Item>
        <Dropdown.Item href="/colonoscopy">Colonoscopy</Dropdown.Item>
        <Dropdown.Item href="/flexiblesigmoidoscopy">Flexible Sigmoidoscopy</Dropdown.Item>
        {/* <Dropdown.Item href="/ercp">ERCP <p>(Endoscopic Retrograde Cholangio Pancreaticogram)</p></Dropdown.Item> */}
        {/* <Dropdown.Item href="/liverbiopsy">Liver Biopsy</Dropdown.Item> */}
        <Dropdown.Item href="/esophagealmanometry">Esophageal Manometry</Dropdown.Item>
        <Dropdown.Item href="/ph24hr">24 Hour pH Probe</Dropdown.Item>
    </DropdownButton>
    </Jumbotron>
    
    </header>  
    <div className="hero"></div>
    </>
    );
  }
}

export default Header;