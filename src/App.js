import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import PostDetail from './Components/PostDetail/PostDetail';


function App() {
  
  return (
    <Router> 
      <Switch> 
        <Route exact path="/">
          <Home />
        </Route>

        <Route path = "/home">
          <Home></Home>
        </Route>

        <Route path = "/detail/:id">
          <PostDetail></PostDetail>
        </Route>
 
        <Route path = "*">
          <Error></Error>
        </Route>
       

      </Switch>
    </Router>
  );
}

export default App;
