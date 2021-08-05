import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import landing from './components/Landing';
import Profile from './components/Profile';
import MakeNewPost from './components/MakeNewPost';
import ViewAllPosts from './components/ViewAllPosts';


function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={landing}></Route>
            <Route path = "/landing" exact component={landing}></Route>
            <Route path = "/profile" exact component = {Profile}></Route>
            <Route path = "/make" exact component = {MakeNewPost}></Route>
            <Route path = "/view" exact component = {ViewAllPosts}></Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
