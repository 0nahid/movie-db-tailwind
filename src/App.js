import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
