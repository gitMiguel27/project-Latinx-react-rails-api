import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Feed from '../Feed/Feed';
import Login from '../Login/Login'
import JustArtists from '../JustArtists/JustArtists';
import MyPage from "../MyPage/MyPage";
import Brazil from "../Brazil/Brazil"
import Colombia from "../Colombia/Colombia"
import Peru from "../Peru/Peru"
import Mexico from "../Mexico/Mexico"

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
            <Route path="/mypage">
              <MyPage/>
            </Route>
            <Route path="/login">
              <Login />
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
      </BrowserRouter>
    </div>
  );
}

export default App;