import React from "react";
import Categories from "../components/Categories/Categories";
import Announcment from "../components/HomeComponents/Announcment";
import NavBar from "../components/HomeComponents/NavBar";
import Products from "../components/ProductsComponents/Products";
import Footer from "../components/Footer/Footer";

const AllProducts = () => {
  return (
    <div>
      <Announcment />
      <NavBar />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default AllProducts;
