import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Nav from "./components/navigation/nav"
import Footer from "./components/footer/footer"
import Body from "./components/body/body"
import {BrowserRouter as Router} from "react-router-dom"
import {Auth0Provider} from '@auth0/auth0-react'

const domain = process.env.REACT_APP_DOMAIN
const clientID = process.env.REACT_APP_CLIENT_ID_DEV

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
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