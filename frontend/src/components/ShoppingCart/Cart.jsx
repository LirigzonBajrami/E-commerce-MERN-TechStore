import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import classes from "./Cart.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Container expand="lg">
      <Row>
        <div className={classes.shoppingCart}>
          <Col className={classes.cart}>
            <h3 className={classes.title}>
              <MdOutlineShoppingCart className="fs-2 cart-icon " /> Your Cart
            </h3>
            {cart.products.map((product) => (
              <Col key={product._id} className={classes["cart-content"]}>
                <img src={product.img} alt={product.title} />
                <div>
                  <p>
                    <strong>Product: </strong> {product.title}
                  </p>
                  <p>
                    <strong>ID: </strong>
                    {product._id}
                  </p>
                </div>
                <div className={classes["cart-buttons"]}>
                  <div>
                    <span>Quantity: {product.quantity}</span>
                  </div>
                  <p>$ {(product.price * product.quantity).toFixed(2)}</p>
                </div>
              </Col>
            ))}
          </Col>
        </div>
      </Row>
      <Row>
        <Col>
          <div className={classes["order-summary"]}>
            <h3>Order Summary</h3>
            <div>
              <p>
                Subtotal: <strong>$ {cart.totalPrice.toFixed(2)} </strong>
              </p>
              <p>
                Product Discount: <strong>$ -4.99</strong>
              </p>
              <p>
                Shipping Discount: <strong>$ -4.99</strong>
              </p>
              <p className={classes.total}>
                Total:{" "}
                <strong>
                  ${" "}
                  {cart.totalPrice.toFixed(2) > 30
                    ? cart.totalPrice.toFixed(2) - 9.98
                    : cart.totalPrice.toFixed(2)}
                </strong>
              </p>
              <button>Checkout Now</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
