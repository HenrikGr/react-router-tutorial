/*
 * Description: 
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
 * Import renderToString for server rendering
 */
import { renderToString } from 'react-dom/server'

/**
 * Import match and RouterContext to match url to application routes to render
 */
import { match, RouterContext } from 'react-router'

/**
 * Import application routes
 */
import routes from './modules/routes'

/**
 * Set up an express web server
 */
var express = require('express');
var path = require('path');
var compression = require('compression');
var app = express();

/**
 * Use compression and it must be the first middleware
 */
app.use(compression());

/**
 * Serve static resources from public directory
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Take care of all requests
 */
app.get('*', (req, res) => {

  /**
   * Match incoming url against application routes
   */
  match({ routes: routes, location: req.url }, (err, redirect, props) => {

    /**
     * Error during route matching
     */
    if (err) {
      res.status(500).send(err.message);
    }

    /**
     * Handle redirects, often used from onEnter hooks on a route,
     * i.e, before a route is entered, it can redirect.
     */
    else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    }

    /**
     * We got props, which means a route match and we can render on server
     */
    else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>);
      res.send(renderPage(appHtml));
    }

    /**
     * No, error, no redirect, we just did not match anything and returning 404.
     */
    else {
      res.status(404).send('Not Found');
    }
  });
});


function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My Second React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}


var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});