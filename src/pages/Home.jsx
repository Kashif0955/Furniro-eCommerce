import React from "react";
import ProductCard from "./Products";
import HeroSection from "./Hero";

const Home = () => {
  return (
    <>
      {/* Full width Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>
      {/* Centered Product Card Section */}
      <div className="container mx-auto px-4">
        <ProductCard />
      </div>
    </>
  );
};

export default Home;
