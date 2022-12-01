import React from "react";
import Login from "../components/RegisterAndLogin/Login";
import Categories from "../components/Categories/Categories";
import Announcment from "../components/HomeComponents/Announcment";
import NavBar from "../components/HomeComponents/NavBar";
import Footer from "../components/Footer/Footer";

const LoginPage = () => {
  return (
    <div>
      <Announcment />
      <NavBar />
      <Categories />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
