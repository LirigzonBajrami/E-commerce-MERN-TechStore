import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [colorOnClick, setColorOnClick] = useState("");
  const dispatch = useDispatch();

  // Add To Cart
  // addProduct action accepts only one payload
  const addToCartHandler = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
      })
    );
  };

  return (
    <Card style={{ width: "18rem" }} className={classes.card}>
      <Link to={`/product/${product._id}`}>
        <div className={classes.productImg}>
          <Card.Img variant="top" src={product.img} />
        </div>
      </Link>
      <Card.Body className={classes.body}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <div className={classes.details}>
          <Link to={`/product/${product._id}`}>
            <Button variant="primary">Details</Button>
          </Link>
          <Button onClick={addToCartHandler} variant="primary">
            Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
