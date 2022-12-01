import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const [users, setUsers] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/users/`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUsers();
  }, []);

  console.log(users);

  return (
    <Navbar bg="navbar" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3">
          Tech<span>Store</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto size">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>

            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>

            {isAdmin && (
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
            )}

            {isAdmin && (
              <Nav.Link as={Link} to="/newProduct">
                Add Product
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/cart">
              <div className="shopping-cart">
                <MdOutlineShoppingCart className="fs-4 cart-icon" />
                <span>Your Cart</span>
                <Badge bg="cart">{quantity}</Badge>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
