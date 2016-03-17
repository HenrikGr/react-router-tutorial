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
import { Link } from 'react-router'

/**
 * Export a render function just to style navigation links.
 * The active css class is defined in the css file
 */
export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})