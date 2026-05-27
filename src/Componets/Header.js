// src/Components/Header.js

import React from "react";
import {
    Container,
    Nav,
    Navbar,
    Button,
} from "react-bootstrap";

import {
    NavLink,
    useNavigate,
} from "react-router-dom";

// import "./Header.css";
import "../assets/styles/header.css"

const Header = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <Navbar
            expand="lg"
            className="custom-navbar"
            sticky="top"
        >
            <Container>

                {/* LOGO */}
                <Navbar.Brand
                    className="logo"
                    onClick={() => navigate("/")}
                >
                    BroCus E-Commerce
                </Navbar.Brand>

                {/* MOBILE TOGGLE */}
                <Navbar.Toggle aria-controls="navbar" />

                <Navbar.Collapse id="navbar">

                    {/* NAV LINKS */}
                    <Nav className="mx-auto nav-links">

                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            className="nav-link"
                        >
                            All products
                        </NavLink>

                        <NavLink
                            to="/about-us"
                            className="nav-link"
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/contact-us"
                            className="nav-link"
                        >
                            Contact
                        </NavLink>

                        {token && (
                            <NavLink
                                to="/my-orders"
                                className="nav-link"
                            >
                                My Orders
                            </NavLink>
                        )}

                    </Nav>

                    {/* RIGHT SIDE BUTTONS */}
                    <div className="header-btns">

                        {!token ? (
                            <>
                                <Button
                                    className="login-btn"
                                    variant="outline-dark"
                                    onClick={() => navigate("/login")}
                                >
                                    Login
                                </Button>

                                <Button
                                    className="signup-btn"
                                    onClick={() => navigate("/register")}
                                >
                                    Sign Up
                                </Button>
                            </>
                        ) : (
                            <Button
                                className="logout-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        )}

                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;