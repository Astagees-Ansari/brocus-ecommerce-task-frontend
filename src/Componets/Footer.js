// src/Components/Footer.js

import React from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
} from "react-bootstrap";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

import "../assets/styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer-section">

            <Container>

                <Row className="gy-4">

                    {/* LOGO & ABOUT */}
                    <Col lg={4} md={6}>
                        <h2 className="footer-logo">
                            BroCus E-Commerce
                        </h2>

                        <p className="footer-text">
                            Your one-stop shop for amazing
                            products at the best prices.
                        </p>

                        <div className="social-icons">

                            <span>
                                <FaFacebookF />
                            </span>

                            <span>
                                <FaInstagram />
                            </span>

                            <span>
                                <FaTwitter />
                            </span>

                            <span>
                                <FaLinkedinIn />
                            </span>

                        </div>
                    </Col>

                    {/* QUICK LINKS */}
                    <Col lg={2} md={6}>
                        <h5 className="footer-title">
                            Quick Links
                        </h5>

                        <ul className="footer-links">
                            <li>Home</li>
                            <li>Categories</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>My Orders</li>
                        </ul>
                    </Col>

                    {/* CUSTOMER */}
                    <Col lg={3} md={6}>
                        <h5 className="footer-title">
                            Customer Service
                        </h5>

                        <ul className="footer-links">
                            <li>FAQs</li>
                            <li>Shipping</li>
                            <li>Returns</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </Col>

                    {/* NEWSLETTER */}
                    <Col lg={3} md={6}>
                        <h5 className="footer-title">
                            Newsletter
                        </h5>

                        <p className="footer-text">
                            Subscribe to get updates on
                            new arrivals and offers.
                        </p>

                        <Form>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className="newsletter-input"
                            />

                            <Button className="subscribe-btn">
                                Subscribe
                            </Button>
                        </Form>
                    </Col>

                </Row>

                {/* COPYRIGHT */}
                <div className="footer-bottom">
                    © 2026 BroCus E-Commerce. All rights reserved.
                </div>

            </Container>

        </footer>
    );
};

export default Footer;