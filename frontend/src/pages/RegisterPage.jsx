import React from "react";
import Categories from "../components/Categories/Categories";
import Announcment from "../components/HomeComponents/Announcment";
import NavBar from "../components/HomeComponents/NavBar";
import Register from "../components/RegisterAndLogin/Register";
import Footer from "../components/Footer/Footer";

const RegisterPage = () => {
  return (
    <div>
      <Announcment />
      <NavBar />
      <Categories />
      <Register />
      <Footer />
    </div>
  );
};

export default RegisterPage;
