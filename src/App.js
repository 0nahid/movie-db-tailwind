import { initializeApp } from "firebase/app";
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import firebaseConfig from "./components/Firebase/firebase.config";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import IMDB from "./components/IMDB/IMDB";
import Latest from "./components/Latest/Latest";
import Login from "./components/Login/Login";
import Top10 from "./components/Top10/Top10";
import Trending from "./components/Trending/Trending";
initializeApp(firebaseConfig);

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/top10">
            <Top10 />
          </Route>
          <Route path="/imdb">
            <IMDB />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;