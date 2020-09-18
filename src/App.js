import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import Home from "./pages/Home"
import Associates from "./pages/Associates"
import Colonoscopy from "./pages/Colonoscopy"
import ContactUs from "https://www.medentmobile.com/portal/index.php?practice_id=9GCvbWd2"
import Directions from "./pages/Directions"
import ERCP from "./pages/ERCP"
import Esophagealmanometry from "./pages/Esophagealmanometry"
import FlexibleSigmoidoscopy from "./pages/FlexibleSigmoidoscopy"
import Insurance from "./pages/Insurance"
import JCAHO from "./pages/JCAHO"
import LiverBiopsy from "./pages/LiverBiopsy"
import ph24hr from "./pages/ph24hr"
import ScreeningColonoscopy from "./pages/ScreeningColonoscopy"
import UpperEndoscopy from "./pages/UpperEndoscopy"

function App() {
  return (
    <> 
      <Header />
      <Container fluid="sm">
        <Row>
          <Col md={9}>
            <Router>
              <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/associates" component={Associates} />
              <Route exact path="/contactus" component={ContactUs} />
              <Route exact path="/insurance" component={Insurance} />
              <Route exact path="/directions" component={Directions} />
              <Route exact path="/screeningcolonoscopy" component={ScreeningColonoscopy} />
              <Route exact path="/upperendoscopy" component={UpperEndoscopy} />
              <Route exact path="/colonoscopy" component={Colonoscopy} />
              <Route exact path="/flexiblesigmoidoscopy" component={FlexibleSigmoidoscopy} />
              <Route exact path="/ercp" component={ERCP} />
              <Route exact path="/liverbiopsy" component={LiverBiopsy} />
              <Route exact path="/esophagealmanometry" component={Esophagealmanometry} />
              <Route exact path="/ph24hr" component={ph24hr} />
              <Route exact path="/jcaho" component={JCAHO} />
              </Switch>
            </Router>
          </Col>
          <Col md={3}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
