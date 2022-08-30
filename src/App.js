import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '@Components/Navbar';
import './App.css';
// import routes from './routes'
import useHook from './hook'
import Home from '@Pages/Home'
import Cart from '@Pages/Cart'

export default function App() {
  const h = useHook();

  const routes = [
    {
      path: '/cart',
      children: <Cart h={h} />
    },
    {
      path: '/',
      children: <Home h={h} />
    },
  ]
  return (
    <Router>
      <div>
        <Navbar h={h} />
        <Switch>
          {routes.map(route => <Route {...route} />)}
        </Switch>
      </div>
    </Router>
  );
}
