import Home from "./pages/home/Home";
import TopBar from "./Components/topbar/TopBar";
import Settings from "./Components/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const user = true;

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register'>
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path='/write'>
          {user ? <Write /> : <Register />}
        </Route>
        <Route exact path='/login'>
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path='/settings'>
          {user ? <Settings /> : <Register />}
        </Route>
        <Route exact path='/post/:postId'>
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
