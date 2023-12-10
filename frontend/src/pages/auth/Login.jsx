import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/nav-bar";
import AuthUser from "../../api/AuthUser";
import "./css/Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../../schema/login-schema";
import axios from "axios";
import { BASE_URL } from "../../constants/env";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginFormSchema),
  });

  const handleClickSubmit = (data) => {
    axios
      .post(`${BASE_URL}/api/login`, data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="logs">
      <header>
        <NavBar />
      </header>
      <div className="all">
        <form className="champ_form" onSubmit={handleSubmit(handleClickSubmit)}>
          <div className="login">
            <h3 className="text-center">Se connecter</h3>
            <input
              className="form-control"
              type="email"
              size="lg"
              placeholder="Enter your Email"
              {...register("email")}
            />
            <input
              className="form-control"
              type="password"
              size="lg"
              placeholder="Enter your password"
              {...register("password")}
            />

            <button type="submit" className="signIn">
              Connexion
            </button>
          </div>
          <Link to="/register">
            <button className="btn-create">Créer un compte</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
