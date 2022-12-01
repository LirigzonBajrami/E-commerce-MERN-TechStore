import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstname: yup.string().required("Please enter your first name."),
  lastname: yup.string().required("Please enter your lastname."),
  username: yup.string().required("Please enter your username."),
  email: yup.string().email().required("Please enter your email."),
  password: yup.string().min(4).max(15).required("Please enter your password"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    const makeRequest = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/auth/register`, {
          method: "POST",
          body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("register success");
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
    reset();
  };

  return (
    <Container>
      <div className={classes.register}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <h4>Register</h4>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            {...register("password")}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            {...register("firstname")}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            {...register("lastname")}
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            {...register("username")}
          />
          <button>Register</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </Container>
  );
};

export default Register;
