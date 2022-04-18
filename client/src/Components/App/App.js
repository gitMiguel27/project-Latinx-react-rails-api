import {React, Fragment} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Navbar from '../Navbar'
import ArtistPage from '../ArtistPage/ArtistPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
        <Navbar />
          <Routes >
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/artist">
              <ArtistPage />
            </Route>
          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
