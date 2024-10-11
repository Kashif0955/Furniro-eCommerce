import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./pages/Products";
import ProductDetailShowcaseSection from "./pages/ProductDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/products" element={<ProductCard />} /> 
        <Route path="/product-details" element={<ProductDetailShowcaseSection />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
