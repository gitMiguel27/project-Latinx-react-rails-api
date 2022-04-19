import {React} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Navbar from '../Navbar'
import ArtistPage from '../ArtistPage/ArtistPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/artist">
              <ArtistPage />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
