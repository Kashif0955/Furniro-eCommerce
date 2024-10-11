import React from "react";
import ProductCard from "./Products";
import HeroSection from "./Hero";
import ShareSetupSection from "./ShareSetup";

const Home = () => {
  return (
    <>
    
      <div className="w-full">
        <HeroSection />
      </div>
    
      <div className="container mx-auto px-4">
        <ProductCard />
        
      </div>
      <ShareSetupSection/>
    </>
  );
};

export default Home;
