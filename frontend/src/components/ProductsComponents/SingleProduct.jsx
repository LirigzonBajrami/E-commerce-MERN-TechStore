import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./SingleProduct.module.css";
import MerreMenjehere from "../../images/merre-menjehere.jpg";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [singleProduct, setSingleProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // Fetch single product
  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setSingleProduct(res.data);
      } catch (err) {}
    };
    getSingleProduct();
  });

  // Decrease quantity
  const decreaseQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Add To Cart
  // addProduct action accepts only one payload
  const addToCartHandler = () => {
    dispatch(
      addProduct({
        ...singleProduct,
        quantity,
      })
    );
  };

  return (
    <Container>
      <Row className={classes["single-product"]}>
        <Col>
          <div className={classes["product-img"]}>
            <img src={singleProduct.img} alt={singleProduct.title} />
          </div>
        </Col>
        <Col>
          <div className={classes["product-info"]}>
            <h3>{singleProduct.title}</h3>
            <p>
              <strong>Product Description:</strong> {singleProduct.desc}
            </p>
            <h4>Price: ${singleProduct.price}</h4>
            <div className={classes.quantity}>
              <div>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button onClick={addToCartHandler}>Add To Cart</button>
            </div>
          </div>
        </Col>
      </Row>
      <img
        className={classes.merreMenjehere}
        src={MerreMenjehere}
        alt="Merre menjehere"
      />
    </Container>
  );
};

export default SingleProduct;
