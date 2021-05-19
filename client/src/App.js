import React from "react";
import { CustomNavbar } from "./components/CustomNavbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from ''

function App() {
  return (
    <>
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

          </Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
