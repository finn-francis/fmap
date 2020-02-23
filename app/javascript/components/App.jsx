import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import NavMenu from './NavMenu'
import Dashboard from './dashboard/Index'
import Targets from './targets/Index'

export default function App() {
  return (
    <Router>
      <div id="wrapper">
        <NavMenu name="Finn" />
        <div id="content-wrapper">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/targets" exact component={Targets} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
