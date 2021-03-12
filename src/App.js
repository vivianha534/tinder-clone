import React from 'react'
import LandingPage from "./containers/LandingPage/LandingPage"
import AuthPage from "./containers/AuthPage/AuthPage"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <LandingPage/>
        </Route>
        <Route exact path = "/auth">
          <AuthPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App

