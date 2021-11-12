import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Nav from "./components/navigation/nav"
import Footer from "./components/footer/footer"
import Body from "./components/body/body"
import {BrowserRouter as Router} from "react-router-dom"
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-vzw0o8x0.us.auth0.com"
      clientId="P2fD4DjwE6QfEZAubwrsvmQ1mMAKXvsb"
      redirectUri={window.location.origin}>
      <Router>
        <Nav />
        <Body />
        <Footer />
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);