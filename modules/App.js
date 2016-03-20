/*
 * Description:
 *
 * App module, the rendering of the
 *
 * Author:  Henrik
 * File:
 * Version: 0.0.1
 *
 * Created on 2016-03-17
 */

/**
 * Import React
 */
import React from 'react'

/**
 * Import navigation link component
 */
import NavLink from './NavLink'

/**
 * Export render method for the app component
 */
export default React.createClass({
  render() {
    return (
      <div>
        <h1>Ghettohub Issues</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {/* This displays the name of the route */}
        {this.props.children}

      </div>
    )
  }
});
