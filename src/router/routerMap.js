import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NoMacth from './404'

// 异步组件
import AsyncComponent from './asyncComponent'
function load(component) {
  return import(`../pages/${component}`)
}

export class RouterMap extends React.component {
  render() {
    return (
      <Router>
        <Switch>
          
        </Switch>
      </Router>
    )
  }
}
