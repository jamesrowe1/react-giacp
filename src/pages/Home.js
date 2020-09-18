import React, { Component } from "react";
import wrowe from "../images/wrowe2.jpg"
import rfwerkman2 from "../images/rfwerkman2.jpg"
import carrie2 from "../images/Carrie2.jpg"
class Home extends Component {
    render() {
      return (
        <>
        <div className="card-bio">
            <img src={wrowe} className="float-left" alt="william-rowe" />
            <h2>William A. Rowe, M.D.</h2>
            <p>
                Dr. Rowe has extensive experience including decades at the Hershey
                Medical Center and over a decade in private practice.
            </p>
        </div>

        <div className="card-bio">
            <img src={rfwerkman2} className="float-left" alt="robert-werkman" />
            <h2>Robert F. Werkman, M.D.</h2>
            <p>
                Dr. Werkman has similiar experience as Dr. Rowe, and is a well respected gastroentorologist.
            </p>
        </div>

        <div className="card-bio">
            <img src={carrie2} className="float-left" alt="carrie-leese" />
            <h2>Carrie Leese, M.M.S., PA-C</h2>
            <p>
                Carrie has been working for GIACP for several years and has done a
                wonderful job.
            </p>
        </div>
        </>
      );
    }
  }
   
  export default Home;