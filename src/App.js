import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '@Components/Navbar';
import './App.css';
import routes from './routes'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {routes.map(route => <Route {...route} />)}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
