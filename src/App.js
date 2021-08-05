import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './components/Profile';
import MakeNewPost from './components/MakeNewPost';
import ViewAllPosts from './components/ViewAllPosts';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';


function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path = "/dash" exact component={Dashboard}></Route>
            <Route path = "/profile" exact component = {Profile}></Route>
            <Route path = "/make" exact component = {MakeNewPost}></Route>
            <Route path = "/view" exact component = {ViewAllPosts}></Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
