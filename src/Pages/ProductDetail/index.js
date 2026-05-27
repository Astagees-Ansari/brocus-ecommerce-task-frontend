// src/Pages/ProductDetail/index.js

import React, {
    useEffect,
    useState,
} from "react";

import {
    Container,
    Row,
    Col,
    Button,
} from "react-bootstrap";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import axiosInstance from "../../axios";

import noImage from "../../assets/images/jpg/No_Image_Available.jpg";

import "../../assets/styles/productDetail.css";
import Swal from "sweetalert2";

const ProductDetail = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    // GET SINGLE PRODUCT

    const getSingleProduct = async () => {

        try {

            const response =
                await axiosInstance.get(
                    `/products/${id}`
                );

            setProduct(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {

        getSingleProduct();

    }, [id]);

    const handleBuyNow = async () => {

        const token = localStorage.getItem("token");

        // USER NOT LOGIN

        if (!token) {

            const result = await Swal.fire({
                title: "Login Required",
                text: "Please login first to continue purchase",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Go To Login",
                cancelButtonText: "Stay Here",
                confirmButtonColor: "orange",
            });

            // USER CLICK LOGIN

            if (result.isConfirmed) {

                localStorage.setItem(
                    "redirectAfterLogin",
                    `/checkout/${product.id}`
                );

                navigate("/login");
            }

            return;
        }

        // USER LOGIN

        navigate(`/checkout/${product.id}`);
    };

    // LOADING

    if (!product) {

        return <h2>Loading...</h2>;
    }

    return (

        <div className="product-detail-page">

            <Container>

                <Row className="align-items-center">

                    {/* IMAGE */}

                    <Col lg={6}>

                        <div className="product-image-box">

                            <img
                                src={product.image || noImage}
                                alt={product.title}
                            />

                        </div>

                    </Col>

                    {/* DETAILS */}

                    <Col lg={6}>

                        <div className="product-details">

                            <h1>
                                {product.title}
                            </h1>

                            <div className="price-box">

                                <h3>
                                    ₹{product.price}
                                </h3>

                            </div>

                            <p className="description">

                                {product.description}

                            </p>

                            <div className="product-buttons">

                                <Button className="cart-btn">

                                    Add To Cart

                                </Button>

                                <Button
                                    className="buy-btn"
                                    onClick={handleBuyNow}
                                >
                                    Buy Now
                                </Button>

                                <Button
                                    variant="dark"
                                    className="pr"
                                    onClick={() => navigate("/")}
                                >
                                    Back To Home Page
                                </Button>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </div>
    );
};

export default ProductDetail;