import { initializeApp } from "firebase/app";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import firebaseConfig from "./components/Firebase/firebase.config";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Latest from "./components/Latest/Latest";
import Login from "./components/Login/Login";
import Trending from "./components/Trending/Trending";
initializeApp(firebaseConfig);
function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Router>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
