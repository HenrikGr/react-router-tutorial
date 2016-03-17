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


export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/rackt/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/test">Test endpoint</NavLink></li>
        </ul>
        {/* will render `Repo.js` when at /repos/:userName/:repoName */}
        {this.props.children}
      </div>
    )
  }
});
