import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Feed from '../Feed/Feed';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import JustArtists from '../JustArtists/JustArtists';
import MyPage from "../MyPage/MyPage";
import Brazil from "../Brazil/Brazil"
import Colombia from "../Colombia/Colombia"
import Peru from "../Peru/Peru"
import Mexico from "../Mexico/Mexico"

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

  if (!user) return <Login setUser={setUser} />

  return (
    <div className="App">
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
            <Route path="/mypage">
              <MyPage/>
            </Route>
            <Route path="/login">
              <Login setUser={setUser}/>
            </Route>
            <Route path="/signup">
              <Signup setUser={setUser}/>
              </Route>
            <Route path="/brazil">
              <Brazil/>
            </Route>
            <Route path="/colombia">
              <Colombia/>
            </Route>
            <Route path="/mexico">
              <Mexico/>
            </Route>
            <Route path="/peru">
              <Peru/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;