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
    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
  },

  render() {
    return (
      <div>
      <ul id="slide-out" className="side-nav fixed">
        <li><a href="#!">First Sidebar Link</a></li>
        <li><a href="#!">Second Sidebar Link</a></li>
      </ul>
      <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
      </div>
    )
  }
});