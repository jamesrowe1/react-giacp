import React from "react"
class Sidebar extends React.Component {
  render() {
    return (
        <div id="sidebar">
            <section className="hours">
                <h3>Hours</h3>
                <ul>
                    <li>
                        Monday: 8AM-4:30PM
                    </li>
                    <li>
                        Tuesday: 8AM-4:30PM
                    </li>
                    <li>
                        Wednesday: 8AM-4:30PM
                    </li>
                    <li>
                        Thursday: 8AM-4:30PM
                    </li>
                    <li>
                        Friday: 8AM-4:30PM
                    </li>
                    <li>
                        Saturday: Closed
                    </li>
                    <li>
                        Sunday: Closed
                    </li>
                </ul>
            </section>
            <section className="location">
                <h3>Location</h3>
                <a href="https://www.google.com/maps/place/1421+Fishburn+Rd,+Hershey,+PA+17033/@40.2635221,-76.643866,17z/data=!3m1!4b1!4m5!3m4!1s0x89c8bb554e9f3b0d:0x915a9051a0a0bff6!8m2!3d40.263518!4d-76.6416773" target="_blank" rel="noopener noreferrer">1421 Fishburn Road, Hershey, PA 17033</a>
            </section>
            <section className="procedures">
                <h3>Procedures</h3>
                <ul>
                    <li>
                        <a href="/screeningcolonoscopy">Screening Colonoscopy</a>
                    </li>
                    <li>
                        <a href="/upperendoscopy">Upper Endoscopy</a>
                    </li>
                    <li>
                        <a href="/colonoscopy">Colonoscopy</a>
                    </li>
                    <li>
                        <a href="/flexiblesigmoidoscopy">Flexible Sigmoidoscopy</a>
                    </li>
                    {/* <li>
                        <a href="/ercp">ERCP (Endoscopic Retrograde Cholangio Pancreaticogram)</a>
                    </li> */}
                    {/* <li>
                        <a href="/liverbiopsy">Liver Biopsy</a>
                    </li> */}
                    <li>
                        <a href="/esophagealmanometry">Esophageal Manometry</a>
                    </li>
                    <li>
                        <a href="/ph24hr">24 Hour pH Probe</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
}

export default Sidebar;