
import Home from '@Pages/Home'
import About from '@Pages/About'

const routes = [
  {
    path: '/about',
    children: <About />
  },
  {
    path: '/',
    children: <Home />
  },
]

export default routes;
