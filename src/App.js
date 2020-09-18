import React from 'react';
import logo from './logo.svg';
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

import Home from "./pages/Home"

function App() {
  return (
    <> 
      <Header />
      <div className="col-md-9">
      <Router>
      
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
        
        
      </Router>
      </div>
      <Sidebar />
    </>
  );
}

export default App;
