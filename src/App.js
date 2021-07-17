import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Amazon Clone : Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Amazon Clone : Login</h1>
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <h1>Amazon Clone : Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
