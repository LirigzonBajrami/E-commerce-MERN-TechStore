import React from "react";
import { Container } from "react-bootstrap";
import AllUsers from "../components/Users/AllUsers";
import Announcment from "../components/HomeComponents/Announcment";
import NavBar from "../components/HomeComponents/NavBar";
import Footer from "../components/Footer/Footer";

const UsersPage = () => {
  return (
    <div>
      <Announcment />
      <NavBar />
      <Container>
        <AllUsers />
      </Container>
      <Footer />
    </div>
  );
};

export default UsersPage;
