import React from "react";
import Announcment from "../components/HomeComponents/Announcment";
import NavBar from "../components/HomeComponents/NavBar";
import AddProduct from "../components/NewProduct/AddProduct";

const NewProductPage = () => {
  return (
    <div>
      <Announcment />
      <NavBar />
      <AddProduct />
    </div>
  );
};

export default NewProductPage;
