
import Home from '@Pages/Home'
import Cart from '@Pages/Cart'

const routes = [
  {
    path: '/cart',
    children: <Cart />
  },
  {
    path: '/',
    children: <Home />
  },
]

export default routes;
