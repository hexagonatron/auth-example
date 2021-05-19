import React from "react";
import { CustomNavbar } from "./components/CustomNavbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { ProtectedRoute } from './components/ProtectedRoute';
import { SecretPage } from './pages/SecretPage';


function App() {
  return (
    <Auth0Provider 
      domain="dev-2gljxr6t.au.auth0.com"
      clientId= "ubeK9inXZ6v5ALnaQWPMGvWaB7s76wd6"
      redirectUri={window.location.origin}
      audience="https://dev-2gljxr6t.au.auth0.com/api/v2/"
      scope="all"
    >
      <Router>
        <CustomNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <ProtectedRoute path="/secret" component={SecretPage} />
        </Switch>
      </Router>
    </Auth0Provider>
  );
}


export default App;
