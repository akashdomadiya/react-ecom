import { Counter } from './features/counter/Counter';
import ProductList from './features/Product-list/ProductList';
import Home from './pages/Home';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Cart } from './features/Cart/Cart';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
      
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  { //only for testing -then page will br added
    path: "/Cart",
    element: <CartPage></CartPage>,
  },
]);

function App() {
  return (

    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
