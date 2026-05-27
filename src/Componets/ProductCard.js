// // src/Components/ProductCard.js

// import React from "react";
// import {
//     Card,
//     Button,
// } from "react-bootstrap";

// import { useNavigate } from "react-router-dom";

// import "../assets/styles/productCard.css";

// const ProductCard = ({ item }) => {

//     const navigate = useNavigate();

//     return (

//         <Card className="product-card">

//             <div className="product-image">

//                 <Card.Img
//                     variant="top"
//                     src={item.image}
//                 />

//             </div>

//             <Card.Body>

//                 <Card.Title>
//                     {item.title}
//                 </Card.Title>

//                 <h5>
//                     ₹{item.price}
//                 </h5>

//                 <Button
//                     className="product-btn"
//                     onClick={() =>
//                         navigate(`/product/${item.id}`)
//                     }
//                 >
//                     View Details
//                 </Button>

//             </Card.Body>

//         </Card>
//     );
// };

// export default ProductCard;

import React from "react";

import {
    Card,
    Button,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {

    const navigate = useNavigate();

    return (

        <Card className="h-100 shadow-sm">

            <Card.Img
                variant="top"
                src={item.image}
                style={{
                    height: "250px",
                    objectFit: "cover",
                }}
            />

            <Card.Body>

                <Card.Title>
                    {item.title}
                </Card.Title>

                <Card.Text>
                    ₹ {item.price}
                </Card.Text>

                <Button
                    className="view-btn"
                    onClick={() =>
                        navigate(`/product/${item.id}`)
                    }
                >
                    View Details
                </Button>

            </Card.Body>

        </Card>
    );
};

export default ProductCard;