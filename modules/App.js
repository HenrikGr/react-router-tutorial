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
 * Import the application bar
 */
import AppBar from './AppBar/AppBar'

/**
 * Export render method for the app component
 */
export default React.createClass({
  
  render() {
    return (
      <div>
        <AppBar/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});
