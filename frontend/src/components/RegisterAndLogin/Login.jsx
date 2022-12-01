import React, { useState } from "react";
import classes from "./Login.module.css";
import Container from "react-bootstrap/Container";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username."),
  password: yup.string().min(4).max(15).required("Please enter your password"),
});

const Login = () => {
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
        const res = await fetch(`http://localhost:3000/api/auth/login`, {
          method: "POST",
          body: JSON.stringify({
            username: data.username,
            password: data.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    makeRequest();
    reset();
  };

  return (
    <Container>
      <div className={classes.login}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <h4>Login</h4>
          <input
            type="text"
            name="username"
            placeholder="Username"
            {...register("username")}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password")}
          />
          <button>Login</button>
          <span>
            Dont't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </Container>
  );
};

export default Login;
