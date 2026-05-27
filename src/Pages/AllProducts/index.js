import React, { useEffect, useState } from "react";

import {
    Container,
    Row,
    Col,
} from "react-bootstrap";

import axiosInstance from "../../axios";

import ProductCard from "../../Componets/ProductCard";

import noImage from "../../assets/images/jpg/No_Image_Available.jpg"

const AllProducts = () => {

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

        <div className="py-5">

            <Container>

                <h2 className="mb-4">
                    All Products
                </h2>

                <Row>

                    {products.map((item) => (

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

        </div>
    );
};

export default AllProducts;