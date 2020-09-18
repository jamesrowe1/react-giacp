import React from "react"
class Header extends React.Component {
  render() {
    return (
        <header>

    <div className="jumbotron text-align-center">
        <h1>Gastroenterology Associates</h1>

        <h2>
            Of Central Pennsylvania, P.C.
        </h2>

    <h4><a href="tel:7175332224">717-533-2224</a></h4>
    <div className="col-md-12" id="mobileInfo">M-F 8am-4:30pm</div>
    <div className="col-md-12" id="mobileInfo">Located at <a href="https://www.google.com/maps/place/1421+Fishburn+Rd,+Hershey,+PA+17033/@40.2635221,-76.643866,17z/data=!3m1!4b1!4m5!3m4!1s0x89c8bb554e9f3b0d:0x915a9051a0a0bff6!8m2!3d40.263518!4d-76.6416773" rel="noopener noreferrer" target="_blank">1421 Fishburn Road, Hershey, PA 17033</a> </div>

    <div className="btn-group">
        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Navigation
        </button>
        <div className="dropdown-menu">
            <a className="dropdown-item" href="/">Home</a>
            <a className="dropdown-item" href="/aboutus">About Us</a>
            <a className="dropdown-item" href="/associates">Associates</a>
            <a className="dropdown-item" href="/contactus">Contact Us</a>
            <a className="dropdown-item" href="/insurance">Insurance</a>
            <a className="dropdown-item" href="/directions">Directions</a>
            <a className="dropdown-item" href="/screeningcolonoscopy">Screening Colonoscopy</a>
        </div>
    </div>
    <div className="btn-group">
        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                Procedures
        </button>
        <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="/screeningcolonoscopy">Screening Colonoscopy</a>
                <a className="dropdown-item" href="/upperendoscopy">Upper Endoscopy</a>
                <a className="dropdown-item" href="/colonoscopy">Colonoscopy</a>
                <a className="dropdown-item" href="/flexiblesigmoidoscopy">Flexible Sigmoidoscopy</a>
                <a className="dropdown-item" href="/ercp">ERCP <p>(Endoscopic Retrograde Cholangio Pancreaticogram)</p></a>
                <a className="dropdown-item" href="/liverbiopsy">Liver Biopsy</a>
                <a className="dropdown-item" href="/esophagealmanometry">Esophageal Manometry</a>
                <a className="dropdown-item" href="/24hrph">24 Hour pH Probe</a>
        </div>
    </div>
    </div>
    
    
    
</header>
    );
  }
}

export default Header;