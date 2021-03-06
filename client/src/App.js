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
  console.log({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    client: process.env.REACT_APP_AUTH0_CLIENT_ID,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  })
  return (
    <Auth0Provider 
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
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
