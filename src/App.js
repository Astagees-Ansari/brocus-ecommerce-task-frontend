// src/App.js

import "./App.css";

import React from "react";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { PrimeReactProvider } from "primereact/api";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import ScrollToTop from "./Componets/ScrollToTop";
import LoginPage from "./AuthPages/LoginPage";
import ProtectedRoutes from "./Componets/ProtectedRoutes";
import AllProducts from "./Pages/AllProducts";
import RegisterPage from "./AuthPages/RegisterPage";
import Checkout from "./Pages/Checkout";
// import Categories from "./Pages/Categories";
// import AboutUs from "./Pages/AboutUs";
// import ContactUs from "./Pages/ContactUs";
// import MyOrders from "./Pages/MyOrders";
// import LoginPage from "./AuthPages/LoginPage";
// import RegisterPage from "./AuthPages/RegisterPage";
// import ScrollToTop from "./Componets/ScrollToTop";
// import ProtectedRoutes from "./Componets/ProtectedRoutes";

const App = () => {

  return (

    <PrimeReactProvider>

      <BrowserRouter>

        <ScrollToTop />

        <Routes>

          {/* ================================= */}
          {/* PUBLIC ROUTES */}
          {/* ================================= */}

          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/register"
            element={<RegisterPage />}
          />

          {/* ================================= */}
          {/* MAIN LAYOUT */}
          {/* ================================= */}

          <Route element={<MainLayout />}>


            <Route
              path="/"
              element={<Home />}
            />


            <Route
              path="/product/:id"
              element={<ProductDetail />}
            />

            <Route
              path="/products"
              element={<AllProducts />}
            />

          </Route>
          <Route
            path="/checkout/:id"
            element={<Checkout />}
          />

          <Route element={<ProtectedRoutes />}>

            <Route element={<MainLayout />}>

              {/* <Route
                path="/my-orders"
                element={<MyOrders />}
              /> */}

            </Route>

          </Route>

        </Routes>

      </BrowserRouter>

    </PrimeReactProvider>

  );
};

export default App;