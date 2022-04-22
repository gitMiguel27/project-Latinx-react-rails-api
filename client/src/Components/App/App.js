import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
            <Route path="/mypage">
              <MyPage/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
<<<<<<< HEAD
            <Route path="/signup">
              <Signup />
=======
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
>>>>>>> 8e654e5c1c0c998fd4312b2178d6677c2e2ec9b8
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;