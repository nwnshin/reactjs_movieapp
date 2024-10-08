import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './routes/Home';

function App() {
  return <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;
