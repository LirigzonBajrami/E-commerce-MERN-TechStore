import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classes from "./Products.module.css";
import merreMenjehere from "../../images/merre-menjehere.jpg";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <Container className={classes["product-container"]}>
      <img
        variant="top"
        src={merreMenjehere}
        className={classes.merreMenjehere}
        alt="Zbritje"
      />
      <Row className={classes["products"]}>
        {products.slice(0, 16).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
