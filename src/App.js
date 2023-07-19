import './App.css';
import BondOffer from './pages/bondOffer/bondOffer';
import Cart from './pages/cart/cart';
import Home from './pages/home/home';
import Signup from './pages/signup/signup';

import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/cart" exact element={<Cart/>}/>
      <Route path="/bond-offer" exact element={<BondOffer/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/logged-in" element={<BondOffer/>}/>
    </Routes>
    <ToastContainer />
  </Router>
  );
}

export default App;
