// src/AuthPages/LoginPage/index.js

import React, { useState } from "react";

import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { FaEnvelope, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";

import "../../assets/styles/login.css";
import axiosInstance from "../../axios";

const LoginPage = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    /* ===================================== */
    /* HANDLE CHANGE */
    /* ===================================== */

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    /* ===================================== */
    /* HANDLE LOGIN */
    /* ===================================== */

    // HANDLE LOGIN

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await axiosInstance.post(
                "/auth/login",
                formData
            );

            // SAVE TOKEN

            localStorage.setItem(
                "token",
                response.data.token
            );

            // SUCCESS ALERT

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome Back",
                showConfirmButton: false,
                timer: 1500,
            });

            // REDIRECT AFTER LOGIN

            const redirectUrl =
                localStorage.getItem(
                    "redirectAfterLogin"
                );

            setTimeout(() => {

                if (redirectUrl) {

                    navigate(redirectUrl);

                    localStorage.removeItem(
                        "redirectAfterLogin"
                    );

                } else {

                    navigate("/");
                }

            }, 1500);

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text:
                    error?.response?.data?.message ||
                    "Invalid email or password",
            });

        } finally {

            setLoading(false);

        }
    };
    return (

        <div className="login-page">

            <Container>

                <Row className="justify-content-center align-items-center min-vh-100">

                    <Col lg={5} md={8}>

                        <Card className="login-card">

                            <Card.Body>

                                {/* LOGO */}

                                <div className="login-logo">
                                    BroCus E-Commerce
                                </div>

                                {/* HEADING */}

                                <div className="login-heading">

                                    <h2>
                                        Welcome Back
                                    </h2>

                                    <p>
                                        Login to continue shopping
                                    </p>

                                </div>

                                {/* FORM */}

                                <Form onSubmit={handleLogin}>

                                    {/* EMAIL */}

                                    <Form.Group className="mb-4">

                                        <Form.Label>
                                            Email Address
                                        </Form.Label>

                                        <div className="input-wrapper">

                                            <FaEnvelope className="input-icon" />

                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                    </Form.Group>

                                    {/* PASSWORD */}

                                    <Form.Group className="mb-4">

                                        <Form.Label>
                                            Password
                                        </Form.Label>

                                        <div className="input-wrapper">

                                            <FaLock className="input-icon" />

                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                    </Form.Group>

                                    {/* BUTTON */}

                                    <Button
                                        type="submit"
                                        className="login-btn-main"
                                        disabled={loading}
                                    >

                                        {loading
                                            ? "Please wait..."
                                            : "Login"}

                                    </Button>

                                </Form>

                                {/* REGISTER */}

                                <div className="register-text">

                                    Don’t have an account?

                                    <Link to="/register">
                                        Register
                                    </Link>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        </div>

    );
};

export default LoginPage;