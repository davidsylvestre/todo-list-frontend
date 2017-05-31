import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <Router>
    <Switch>
      <Route path='/todos' component={Todo}></Route>
      <Route path='/about' component={About}></Route>
      <Route component={Todo}></Route>
    </Switch>
  </Router>
)
