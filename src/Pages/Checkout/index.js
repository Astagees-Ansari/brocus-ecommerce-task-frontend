import React, {
    useEffect,
    useState,
    useCallback,
} from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    Card,
} from "react-bootstrap";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import Swal from "sweetalert2";

import axiosInstance from "../../axios";
import "../../assets/styles/checkout.css";
import noImage from "../../assets/images/jpg/No_Image_Available.jpg";

const Checkout = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [product, setProduct] =
        useState(null);

    const [quantity, setQuantity] =
        useState(1);

    // GET PRODUCT

    const getProduct = useCallback(async () => {

        try {

            const response =
                await axiosInstance.get(
                    `/products/${id}`
                );

            setProduct(response.data);

        } catch (error) {

            console.log(error);

        }

    }, [id]);

    useEffect(() => {

        getProduct();

    }, [getProduct]);

    // HANDLE PURCHASE

    const handlePurchase = async () => {

        try {

            const token =
                localStorage.getItem("token");

            await axiosInstance.post(

                "/purchase",

                {
                    productId: id,
                    quantity,
                },

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                }
            );

            Swal.fire({
                icon: "success",
                title: "Order Placed",
                text: "Purchase successful",
            });

            navigate("/my-orders");

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: "error",
                title: "Purchase Failed",
                text:
                    error?.response?.data?.message,
            });
        }
    };

    if (!product) {

        return <h2>Loading...</h2>;
    }

    return (

        <div className="checkout-page">

            <Container>

                <Row className="justify-content-center">

                    <Col lg={10}>

                        <Card className="checkout-card">

                            <Row className="align-items-center">

                                {/* IMAGE */}

                                <Col lg={6}>

                                    <img
                                        src={product?.image || noImage}
                                        alt={product?.title}
                                        className="checkout-image"
                                    />

                                </Col>

                                {/* DETAILS */}

                                <Col lg={6}>

                                    <h2 className="checkout-title">
                                        {product.title}
                                    </h2>

                                    <p className="checkout-description">
                                        {product.description}
                                    </p>

                                    <h3 className="checkout-price">
                                        ₹ {product.price}
                                    </h3>

                                    {/* QUANTITY */}

                                    <Form.Group>

                                        <Form.Label className="quantity-label">
                                            Quantity
                                        </Form.Label>

                                        <Form.Control
                                            type="number"
                                            min={1}
                                            value={quantity}
                                            onChange={(e) =>
                                                setQuantity(e.target.value)
                                            }
                                            className="quantity-input"
                                        />

                                    </Form.Group>

                                    {/* TOTAL */}

                                    <h4 className="checkout-total">

                                        Total:
                                        ₹
                                        {product.price * quantity}

                                    </h4>

                                    {/* BUTTON */}

                                    <Button
                                        className="checkout-btn"
                                        onClick={handlePurchase}
                                    >
                                        Confirm Purchase
                                    </Button>

                                </Col>

                            </Row>

                        </Card>

                    </Col>

                </Row>

            </Container>

        </div>
    );
};

export default Checkout;