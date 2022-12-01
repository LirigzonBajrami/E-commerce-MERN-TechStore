import React from "react";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Announcment from "../components/HomeComponents/Announcment";
import NavBar from "../components/HomeComponents/NavBar";
import SingleProduct from "../components/ProductsComponents/SingleProduct";

const ProductDetail = () => {
  return (
    <div>
      <Announcment />
      <NavBar />
      <Categories />
      <SingleProduct />
      <Footer />
    </div>
  );
};

export default ProductDetail;
