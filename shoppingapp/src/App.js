import Product from "./pages/Product";
import Products from "./component/Products";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";

const App = () => {
  const currentUser = true;
  return (
<Router>
<Routes>
<Route exact path="/" element={<Home/>}/>    
<Route path="/products/:category" element={<ProductList/>}/>    
<Route path="/products/:id" element={<Product/>}/>    
<Route path="/cart" element={<Cart/>}/>   
<Route path="/login"  element={currentUser ? Home : Login} />
<Route path="/register" element={currentUser ? Home : Register}/>      
</Routes>
</Router>
  );
}

export default App;