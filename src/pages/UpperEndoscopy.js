import React, { Component } from "react";

class UpperEndoscopy extends Component {
    render() {
      return (
        <>
            <h2 class="uppertitle">What is an Upper Endoscopy?</h2>

            <div class="video-container">
            <iframe title="upperendoscopy youtube video" width="853" height="480" src="https://www.youtube.com/embed/gpxR1ji4fkw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <section class="upperexplanation">
                <p>
                    Upper endoscopy enables the physician to look inside the
                    esophagus, stomach, and duodenum (first part of the small
                    intestine). The procedure might be used to discover the reason for
                    swallowing difficulties, nausea, vomiting, reflux, bleeding,
                    indigestion, abdominal pain, or chest pain. Upper endoscopy is
                    also called EGD, which stands for esophagogastroduodenoscopy
                    (eh-SAH-fuh-goh-GAS-troh-doo-AH-duh-NAH-skuh-pee).
                </p>
                <p>
                    For the procedure you will swallow a thin, flexible, lighted tube
                    called an endoscope (EN-doh-skope). Right before the procedure the
                    physician will spray your throat with a numbing agent that may
                    help prevent gagging. You may also receive pain medicine and a
                    sedative to help you relax during the exam. The endoscope
                    transmits an image of the inside of the esophagus, stomach, and
                    duodenum, so the physician can carefully examine the lining of
                    these organs. The scope also blows air into the stomach; this
                    expands the folds of tissue and makes it easier for the physician
                    to examine the stomach.
                </p>
                <p>
                    The physician can see abnormalities, like inflammation or
                    bleeding, through the endoscope that don't show up well on x rays.
                    The physician can also insert instruments into the scope to remove
                    samples of tissue (biopsy) for further tests or treat bleeding
                    abnormalities.
                </p>
                <p>
                    Possible complications of upper endoscopy include bleeding and
                    puncture of the stomach lining. However, such complications are
                    rare. Most people will probably have nothing more than a mild sore
                    throat after the procedure.
                </p>
                <p>
                    The procedure takes 20 to 30 minutes. Because you will be sedated,
                    you will need to rest at the endoscopy facility for 1 to 2 hours
                    until the medication wears off.
                </p>
                <h3>Preparation</h3>
                <p>
                    Your stomach and duodenum must be empty for the procedure to be
                    thorough and safe, so you will not be able to eat or drink
                    anything for at least 6 hours beforehand. Also, you must arrange
                    for someone to take you home--you will not be allowed to drive
                    because of the sedatives. Your physician may give you other
                    special instructions.
                </p>
            </section>
        </>
      );
    }
  }
   
  export default UpperEndoscopy;