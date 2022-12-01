import React from "react";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Announcment from "../components/HomeComponents/Announcment";
import NavBar from "../components/HomeComponents/NavBar";
import Slider from "../components/HomeComponents/Slider";
import Products from "../components/ProductsComponents/Products";

const Home = () => {
  return (
    <div>
      <Announcment />
      <NavBar />
      <Categories />
      <Slider />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
