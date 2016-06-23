/*
 * Description: 
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created on 2016-06-23
 */
/**
 * Import React
 */
import React from 'react'

/**
 * Import Link from react router
 */
import { Link } from 'react-router'

/**
 * Export render method for the app component
 */
export default React.createClass({
  
  componentDidMount: function() {

  },
  
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" onlyActiveOnIndex className="brand-logo">HGC AB</Link>
          <ul id="app-bar-links" className="right" role="nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos">Repos</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
});
