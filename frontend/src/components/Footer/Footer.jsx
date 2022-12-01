import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Footer.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes["footer-container"]}>
        <Row>
          <Col className={classes.center}>
            <h3>
              Tech<span>Store</span>
            </h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptate et commodi beatae eaque tempore sequi iste nulla rerum
                ex!
              </p>
            </div>
          </Col>
          <Col className={classes.center}>
            <div>
              <h3>Useful Links</h3>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Terms</li>
                <li>Register</li>
              </ul>
            </div>
          </Col>
          <Col className={classes.center}>
            <div>
              <h3>Contact</h3>
              <ul>
                <li>
                  <BiMap /> 342 New Work, 887746
                </li>
                <li>
                  <BsFillTelephoneForwardFill /> +383 48-344-345
                </li>
                <li>
                  <AiOutlineMail /> techstore@gmail.com
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className={classes.rights}>
        <span>&copy; All rights reserved!</span>
      </div>
    </Fragment>
  );
};

export default Footer;
