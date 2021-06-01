import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Cart from './Cart';
import Product from './Product';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/signIn">
            <SignIn/>
          </Route>
          <Route exact path="/signUp">
            <SignUp/>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/product">
            <Product/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
