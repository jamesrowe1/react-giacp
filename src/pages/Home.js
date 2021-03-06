import React, { Component } from "react";
import wrowe from "../images/wrowe2.jpg"
import rfwerkman2 from "../images/rfwerkman2.jpg"
import carrie2 from "../images/Carrie2.jpg"
class Home extends Component {
    render() {
      return (
        <>
        <h3>
            Our Story
        </h3>
        <div className="card-bio">
            Gastroentorology Associates of Central Pennsylvania was founded in 2003 by Dr. William Rowe and Dr. Robert Werkman. They have now expanded to include PA Carrie Leese, and are looking forward to providing whatever Gastroentorological services you require.
        </div>
        <h3>
            Our Providers
        </h3>
        <section className="william-rowe card card-bio center">
                <img src={wrowe} className="center associate" alt="william-rowe" />
                <h2 className="float-right">William A. Rowe, M.D.</h2>
            </section>
            <section className="robert-werkman card card-bio center">
                <img src={rfwerkman2} className="center associate" alt="robert-werkman" />
                <h2>Robert F. Werkman, M.D.</h2>
            </section>

            <section className="carrie-leese card card-bio center">
                <img src={carrie2} alt="carrie-leese" className="center associate" />
                <h2>Carrie Leese, M.M.S., PA-C</h2>
            </section>
        {/* <div className="card-bio">
            "My Urologist referred me to Dr R for difficulties that have gotten worse following multiple pelvic surgeries. His office had me mail Medical Records in advance, which he had reviewed before we met. His questions were direct, on point, & his recommendations helpful. He answered my questions, making sure I understood the changes I am supposed to make."
        </div>
        <div className="card-bio">
            "I have been going to Dr Rowe for about 2 years and have had several procedures. Dr. Rowe and his staff are very professional and caring. Appointments are easy to get. They have the facilities to do upper and lower GIs right on the premise. It is much easier than having to go to the hospital.
        </div> */}
        </>
      );
    }
  }
   
  export default Home;