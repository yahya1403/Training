import React from 'react';
import {Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import About from './About';
function App() {
  
  return (
    <React.Fragment>
       <Header/>
       <Switch>
        <Route exact path="/" component={Home}/> 
        <Route path="/about" component={About}/> 
      </Switch>
    </React.Fragment>
  );
}

export default App;
