/*
 * Description:
 *
 * Author:  Henrik
 * File:
 * Version: 0.0.1
 *
 * Created on 2016-03-17
 */
import React from 'react'
import NavLink from './NavLink'

/**
 *
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

        {/* add this */}
        {this.props.children}

      </div>
    )
  }
});
