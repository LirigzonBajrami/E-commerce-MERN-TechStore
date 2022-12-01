import React, { useState, useEffect, Fragment } from "react";
import Categories from "./Categories";
import Announcment from "../HomeComponents/Announcment";
import NavBar from "../HomeComponents/NavBar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Row } from "react-bootstrap";
import ProductCard from "../ProductsComponents/ProductCard";
import Container from "react-bootstrap/Container";
import classes from "./Categories.module.css";
import merreMenjehere from "../../images/merre-menjehere.jpg";

const Category = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    const getProductsByCategory = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/products?category=${cat}`
        );
        setProductsByCategory(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProductsByCategory();
  }, [cat]);

  return (
    <Fragment>
      <Announcment />
      <NavBar />
      <Categories />

      <Container className={classes["product-container"]}>
        <img variant="top" src={merreMenjehere} alt="Zbritje" />
        <h4>Category: {cat}</h4>
        <Row className={classes["products"]}>
          {productsByCategory.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Category;
