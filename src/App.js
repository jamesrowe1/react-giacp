import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import Home from "./pages/Home"

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
              <Route exact path="/associates" component={Home} />
              <Route exact path="/contactus" component={Home} />
              <Route exact path="/insurance" component={Home} />
              <Route exact path="/directions" component={Home} />
              <Route exact path="/screeningcolonoscopy" component={Home} />
              <Route exact path="/upperendoscopy" component={Home} />
              <Route exact path="/colonoscopy" component={Home} />
              <Route exact path="/flexiblesigmoidoscopy" component={Home} />
              <Route exact path="/ercp" component={Home} />
              <Route exact path="/liverbiopsy" component={Home} />
              <Route exact path="/esophagealmanometry" component={Home} />
              <Route exact path="/24hrph" component={Home} />
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
