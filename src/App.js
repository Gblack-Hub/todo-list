import React from 'react';
import Home from './components/Home';
import Login from './components/auth/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;