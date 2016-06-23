/*
 * Description: Routes available for both client and server
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created on 2016-03-18
 */

/**
 * Import React
 */
import React from 'react'

/**
 * Import React router
 */
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

/**
 * Import application routes
 */
import App from './App'
import About from './About/About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'

/**
 * Export the route map for the app
 * @type {XML}
 */
module.exports = (

  /**
   * Route map for the app
   */
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
  </Route>
);