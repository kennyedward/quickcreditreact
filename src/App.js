import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/home/index';
import { Signin } from './components/auth/Signin/index'
import { Signup } from './components/auth/Signup/index'

export const App = () => {
    return (
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
    );
}

export default App;
