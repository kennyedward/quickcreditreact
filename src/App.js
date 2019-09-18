import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home/index';
import { Signin } from './components/auth/Signin/index'
import Signup from './components/auth/Signup/index';

const App = () => {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
      </BrowserRouter>
    );
}

export default App;
