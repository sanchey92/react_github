import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import NavBar from "../navbar";
import HomePage from "../../pages/home-page";
import AboutPage from "../../pages/about-page";
import Profile from "../../pages/profile";
import Alert from "../alert";
import AlertState from "../../context/alert/alert-state";
import {GithubState} from "../../context/github/github-state";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <NavBar/>
          <div className='container pt-4'>
            <Alert alert={{text: 'test Alert'}}/>
            <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route path='/about' component={AboutPage}/>
              <Route path='/profile/:name' component={Profile}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;