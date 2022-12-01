import React from "react";
import Cart from "../components/ShoppingCart/Cart";
import Categories from "../components/Categories/Categories";
import Announcment from "../components/HomeComponents/Announcment";
import NavBar from "../components/HomeComponents/NavBar";
import Footer from "../components/Footer/Footer";

const CartPage = () => {
  return (
    <div>
      <Announcment />
      <NavBar />
      <Categories />
      <Cart />
      <Footer />
    </div>
  );
};

export default CartPage;
