import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavMenu from './NavMenu'
import Dashboard from './dashboard/Index'
import Targets from './targets/Index'

export default function App() {
  return (
    <Router>
      <NavMenu name="Finn" />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/targets" exact component={Targets} />
      </Switch>
    </Router>
  )
}
