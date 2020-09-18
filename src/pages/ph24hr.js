import React, { Component } from "react";

class ph24hr extends Component {
    render() {
      return (
        <>
          <h4>24 Hour pH Probe</h4>
          <div className="video-container">
          <iframe title="24hrph probe video" src="https://www.youtube.com/embed/25XVtCveoPA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p>The 24 hour pH probe test will monitor the acid in your esophagus during a 24 hour period.  It involves the placement of a very small diameter tube through the nostril, which is swallowed into the esophagus with drinks of water.  The tube will be attached to a minicomputer/recorder held in a carrying case that you will carry with you during a normal day.  You should try to perform your usual activities, regular eating habits (with the exception of alcohol and any medicines that would change the acid in your esophagus during testing (e.g., antacids)).  You will be asked to keep a simple diary.  Complete instructions about the diary will be given to you at the time of the tube placement.  The tube will be removed the next day at a time set up by the nurse before you leave.  It generally takes about half an hour to place the tube and give you instructions.  You will then be sent home with the tube for approximately 24 hours.  There is no sedation given, so you will be able to drive and go to work after the probe is placed and after it is removed.</p>

          <h5>Preparation</h5>

          <h6>5 days before test:</h6>

          <p>Discontinue any Aciphex, Axid (Nizatidine), Nexium, Omeprazole, Pepcid (Famotidine), Prevacid, Prilosec, Prilosec OTC, Protonix, Tagamet (Cimetidine), Zantac (Ranitidine), and Zegerid unless instructed otherwise by your physician.</p>

          <h6>Midnight prior to the test:</h6>

          <p>Discontinue all antacids, including Maalox, Tums, Mylanta, Gaviscon, Rolaids.</p>

          <h6>Day of test</h6>

          <p>You will not be able to eat or drink anything for six hours prior to the test.</p>


        </>
      );
    }
  }
   
  export default ph24hr;