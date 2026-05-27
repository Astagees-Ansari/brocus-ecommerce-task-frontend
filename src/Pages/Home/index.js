import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";

import ProductCard from "../../Componets/ProductCard";
import noImage from "../../assets/images/jpg/No_Image_Available.jpg";

import "../../assets/styles/home.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Home = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {

            const response = await axiosInstance.get("/products");

            setProducts(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {

        getProducts();

    }, []);

    return (
        <div className="home-page">

            {/* HERO SECTION */}

            <section className="hero-section">

                <Container>

                    <Row className="align-items-center">

                        {/* LEFT */}

                        <Col lg={6}>

                            <div className="hero-content">

                                <h1>
                                    Find The Best Products
                                    At The Best Prices
                                </h1>

                                <p>
                                    Shop now and explore amazing
                                    deals on top quality products.
                                </p>

                                <Button className="shop-btn">
                                    Shop Now
                                </Button>

                            </div>

                        </Col>

                        {/* RIGHT */}

                        <Col lg={6}>

                            <div className="hero-image">

                                <img
                                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
                                    alt="hero"
                                />

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/* SEARCH SECTION */}

            <section className="search-section">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="search-box">

                                <Form.Control
                                    type="text"
                                    placeholder="Search products..."
                                />

                                <Button>
                                    Search
                                </Button>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/* PRODUCTS */}

            <section className="products-section">

                <Container>

                    <div className="section-header">

                        <h2>All Products</h2>

                        <Button variant="dark">
                            View All
                        </Button>

                    </div>

                    <Row>

                        {products.slice(0, 4).map((item) => (

                            <Col
                                lg={3}
                                md={6}
                                sm={6}
                                xs={12}
                                key={item.id}
                                className="mb-4"
                            >

                                <ProductCard
                                    item={{
                                        ...item,
                                        image: item.image || noImage
                                    }}
                                />

                            </Col>
                        ))}

                    </Row>

                </Container>

            </section>

        </div>
    );
};

export default Home;