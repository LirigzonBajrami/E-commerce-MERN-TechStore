import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import UsersPage from "./pages/UsersPage";
import NewProductPage from "./pages/NewProductPage";
import { useState, useEffect } from "react";

function App() {
  // Modify later
  const user = false;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <AllProducts />
          </Route>
          <Route exact path="/products/:category">
            <CategoryPage />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>

          {/* SHow only if user is not login */}
          <Route path="/register">
            {user ? <Redirect to="/" /> : <RegisterPage />}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/users">{<UsersPage />}</Route>
          <Route path="/newProduct">
            <NewProductPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
