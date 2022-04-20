import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Feed from '../Feed/Feed';
import Login from '../Login/Login'
import JustArtists from '../JustArtists/JustArtists';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/artists">
              <JustArtists />
            </Route>
            <Route path="/explore">
              <Feed />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;