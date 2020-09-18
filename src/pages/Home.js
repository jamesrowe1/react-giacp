import React, { Component } from "react";

class Home extends Component {
    render() {
      return (
        <>
        <h4>
            Our Story
        </h4>
        <div className="card-bio">
            Gastroentorology Associates of Central Pennsylvania was founded in 2003 by Dr. William Rowe and Dr. Robert Werkman. They have now expanded to include PA Carrie Leese, and are looking forward to providing whatever Gastroentorological services you require.
        </div>
        <h4>
            Reviews
        </h4>
        <div className="card-bio">
            "My Urologist referred me to Dr R for difficulties that have gotten worse following multiple pelvic surgeries. His office had me mail Medical Records in advance, which he had reviewed before we met. His questions were direct, on point, & his recommendations helpful. He answered my questions, making sure I understood the changes I am supposed to make."
        </div>
        <div className="card-bio">
            "I have been going to Dr Rowe for about 2 years and have had several procedures. Dr. Rowe and his staff are very professional and caring. Appointments are easy to get. They have the facilities to do upper and lower GIs right on the premise. It is much easier than having to go to the hospital.
        </div>
        </>
      );
    }
  }
   
  export default Home;