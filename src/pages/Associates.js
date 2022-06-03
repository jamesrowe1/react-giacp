import React, { Component } from "react";
import wrowe from "../images/wrowe2.jpg"
import rfwerkman2 from "../images/rfwerkman2.jpg"
import carrie2 from "../images/Carrie2.jpg"
import kershner from "../images/haley_kershner2.jpg"
class Associates extends Component {
    render() {
      return (
        <>
            <section className="william-rowe">
                <img src={wrowe} className="float-left associate" alt="william-rowe" />
                <h2>William A. Rowe, M.D.</h2>
                <p>
                    Dr. Rowe received a Bachelor of Arts from Cornell University and a
                    Doctor of Medicine from the University of Connecticut School of
                    Medicine. His Internal Medicine training was received at the
                    University of Connecticut, and his Gastroenterology fellowship
                    training was obtained at The Johns Hopkins University School of
                    Medicine. Dr. Rowe joined the gastroenterology faculty of the
                    Pennsylvania State University College of Medicine in 1992. Dr.
                    Rowe became the Medical Director of the office practice for the
                    Gastroenterology Division at Penn State's Milton S. Hershey
                    Medical Center. Dr. Rowe achieved a full-time faculty position as
                    a tenured Associate Professor of Medicine before starting a new
                    gastroenterology practice in January 2003 with Dr. Werkman.
                </p>
                <br />
                <p>
                    Dr. Rowe is an active member of the American Gastroenterological
                    Association, the American Society for Gastrointestinal Endoscopy,
                    and the Crohns and Colitis Foundation of America.
                </p>
                <br />
                <p>
                    Dr. Rowe is a licensed Medical Physician and Surgeon in the
                    Commonwealth of Pennsylvania.
                </p>
                <p>
                    National Library of Medicine Medline search for publications by
                    <strong><a className="linkOnPage" href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Search&db=PubMed&term=rowe+wa[au]"> Dr.
                            Rowe</a></strong>
                </p>
            </section>
            

            <section className="carrie-leese ">
                <img src={carrie2} alt="carrie-leese" className="associate" />
                <h2>Carrie Leese, M.M.S., PA-C</h2>
                <p>
                    Ms. Leese received her Bachelor of Science degree at the
                    Pennsylvania State University in Biology. She then completed a
                    Masters of Medical Science degree at Arcadia University. She
                    achieved her Certification as a physician's assistant in 2010, and
                    joined Gastroenterology Associates the same year. She is a member
                    of the American Academy of Physician Assistants and the American
                    Gastroenterological Association
                </p>
                <br />
                <p>
                    Ms. Leese is a licensed and Certified Physicians Assistant in the
                    Commonwealth of Pennsylvania.
                </p>
            </section>

            <section className="haley-kershner ">
                <img src={kershner} alt="haley-kershner" className="associate" />
                <h2>Haley Kershner, M.M.S., PA-C</h2>
                <p>
                Ms. Kershner received both her Bachelor of Science (2019) and Masters of Science (2021) in Physician Assistant Studies from Thomas Jefferson University - East Falls Campus. She became certified and licensed in the state of Pennsylvania in September 2021, and became a provider at GIACP that month as well. Haley is a part of the American Gastroenterological Association (AGA), American Academy of Physician Assistants (AAPA), and Pennsylvania Society of Physician Assistants (PSPA). She was born and raised in Lititz, PA and is thrilled to be serving her community and the surrounding counties at Gastroenterology Associates of Central Pennsylvania.
                </p>
                <br />
                <p>
                    Ms. Kershner is a licensed and Certified Physicians Assistant in the
                    Commonwealth of Pennsylvania.
                </p>
            </section>

            <section className="robert-werkman">
                {/* <img src={rfwerkman2} className="float-right associate" alt="robert-werkman" /> */}
                <h6>Robert F. Werkman, M.D. (retired)</h6>
                <p>
                    Dr. Werkman received a Bachelor of Arts from Lehigh University and
                    a Doctor of Medicine from Jefferson Medical College of Thomas
                    Jefferson University. His Internal Medicine training was received
                    at the University of Virginia, and his Gastroenterology fellowship
                    training was obtained at The Duke University School of Medicine.
                    Dr. Werkman joined the gastroenterology faculty of the University
                    of Tennessee School of Medicine, where, over 10 years, he became a
                    tenured Associate Professor of Medicine. Dr. Werkman moved to the
                    Pennsylvania State University College of Medicine in 2000. Dr.
                    Werkman was the Director of Endoscopy for the Gastroenterology
                    Division at Penn State's Milton S. Hershey Medical Center. Dr.
                    Werkman left his position as an Associate Professor of Medicine in
                    January 2003 to start a gastroenterology practice with Dr. Rowe.
                </p>
                <br />
                <p>
                    Dr. Werkman is a licensed Medical Physician and Surgeon in the
                    Commonwealth of Pennsylvania.
                </p>
                <br />
                <p>
                    National Library of Medicine Medline search for publications by
                    <strong><a className="linkOnPage" href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Search&db=PubMed&term=werkman+rf[au]"> Dr.
                            Werkman</a></strong>
                </p>
            </section>
        </>
      );
    }
  }
   
  export default Associates;