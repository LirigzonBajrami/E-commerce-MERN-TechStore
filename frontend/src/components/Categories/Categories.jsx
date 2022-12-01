import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Categories.module.css";
import { Link } from "react-router-dom";
import { categories } from "../../Data";

const Categories = () => {
  return (
    <Fragment>
      <Navbar
        bg="gray-backround"
        className={classes["bg-gray-backround"]}
        variant="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-6">
            Categories
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                as={Link}
                className={classes.borderCategory}
                to={`/products/${categories[0].cat}`}
              >
                Phone
              </Nav.Link>

              <Nav.Link
                as={Link}
                className={classes.borderCategory}
                to={`/products/${categories[1].cat}`}
              >
                TV
              </Nav.Link>

              <Nav.Link
                as={Link}
                className={classes.borderCategory}
                to={`/products/${categories[2].cat}`}
              >
                Headphones
              </Nav.Link>

              <Nav.Link
                as={Link}
                className={classes.borderCategory}
                to={`/products/${categories[3].cat}`}
              >
                Gaming
              </Nav.Link>

              <Nav.Link
                as={Link}
                className={classes.borderCategory}
                to={`/products/${categories[4].cat}`}
              >
                Kompjuter
              </Nav.Link>

              <Nav.Link
                as={Link}
                className={classes.borderCategory}
                to={`/products/${categories[5].cat}`}
              >
                Smart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Categories;
