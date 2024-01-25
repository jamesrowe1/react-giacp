import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-lg-start text-white' style={{ backgroundColor: '#0a4275' }}>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

      </section> */}

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Gastroentorology Associates of Central Pennsylvania
              </h6>
              
            </div>


            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <a href="https://www.google.com/maps/place/1421+Fishburn+Rd,+Hershey,+PA+17033/@40.2635221,-76.643866,17z/data=!3m1!4b1!4m5!3m4!1s0x89c8bb554e9f3b0d:0x915a9051a0a0bff6!8m2!3d40.263518!4d-76.6416773" target="_blank" rel="noopener noreferrer">1421 Fishburn Road, Hershey, PA 17033</a>
              </p>
              <p>
              <a href="tel:7175332224">(717) 533-2224</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 James Rowe Coding
      </div>
    </MDBFooter>
  );
}