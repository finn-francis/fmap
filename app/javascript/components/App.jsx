import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import NavMenu from './NavMenu'
import Dashboard from './dashboard/Index'
import Companies from './companies/Index'
import Company from './companies/Show'
import Targets from './targets/Index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { firstName: 'Guest' }
    };
  }

  componentDidMount() {
    const url = "/api/v1/dashboards"
    self = this
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {this.setState({ currentUser: response })})
      .catch(() => { self.props.history.push("/")});
  }

  render() {
    return (
      <Router>
        <div id="wrapper">
          <NavMenu name={this.state.currentUser.firstName} />
          <div id="content-wrapper">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/companies" exact component={Companies} />
              <Route path="/companies/:id" exact component={Company} />
              <Route path="/targets" exact component={Targets} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
export default App
