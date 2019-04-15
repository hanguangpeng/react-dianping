import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NoMatch from './404'
import Home from '../pages/Home/index'
import User from '../pages/User/index'
// 异步组件
import asyncComponent from './asyncComponent'
function load(component) {
  return import(`../pages/${component}`)
}
const Login = asyncComponent(() => load('Login'))
const City = asyncComponent(() => load('City'))
const Detail = asyncComponent(() => load('Detail'))
const Search = asyncComponent(() => load('Search'))

export class RouterMap extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login/:refer?" component={Login} />
            <Route path="/user" component={User} />
            <Route path="/city" component={City} />
            <Route path="/search/:category/:keyword?" component={Search} />
            <Route path="/detail/:id" component={Detail} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
