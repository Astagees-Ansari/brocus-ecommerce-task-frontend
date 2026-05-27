// src/AuthPages/RegisterPage/index.js

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

import {
    FaUser,
    FaEnvelope,
    FaLock,
} from "react-icons/fa";

import Swal from "sweetalert2";

import axiosInstance from "../../axios";

import "../../assets/styles/register.css";

const RegisterPage = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    // HANDLE CHANGE

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    // HANDLE REGISTER

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await axiosInstance.post(
                "/auth/signup",
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
                title: "Registration Successful",
                text: "Welcome To BroCus",
                showConfirmButton: false,
                timer: 1500,
            });

            setTimeout(() => {

                navigate("/");

            }, 1500);

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text:
                    error?.response?.data?.message ||
                    "Something went wrong",
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
                                        Create Account
                                    </h2>

                                    <p>
                                        Register to start shopping
                                    </p>

                                </div>

                                {/* FORM */}

                                <Form onSubmit={handleRegister}>

                                    {/* NAME */}

                                    <Form.Group className="mb-4">

                                        <Form.Label>
                                            Full Name
                                        </Form.Label>

                                        <div className="input-wrapper">

                                            <FaUser className="input-icon" />

                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                    </Form.Group>

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
                                            : "Register"}

                                    </Button>

                                </Form>

                                {/* LOGIN */}

                                <div className="register-text">

                                    Already have an account?

                                    <Link to="/login">
                                        Login
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

export default RegisterPage;