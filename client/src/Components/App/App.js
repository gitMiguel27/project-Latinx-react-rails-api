import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Feed from '../Feed/Feed';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import JustArtists from '../JustArtists/JustArtists';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />

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
            <Route path="/signup">
              <Signup />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;