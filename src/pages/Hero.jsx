import React from "react";

function HeroSection() {
  return (
    <section className="bg-hero flex flex-col justify-center items-end w-full h-[calc(100vh-73px)] bg-no-repeat bg-cover bg-bottom">
      <div className="bg-[#FFF3E3] mx-4 md:mr-[56px] md:ml-0 inline-block rounded-[10px] px-4 md:px-[39px] pt-[37px]  md:pt-[62px] pb-[37px]">
        <p className="text-black " style={{fontSize:'20px', fontWeight:'700'}}>
          New Arrival
        </p>
        <p className="text-[#B88E2F] py-4 md:py-2 leading-tight md:text-large font-bold" style={{ fontSize: '52px', fontWeight: '700' }}>
          Discover Our <br /> New Collection
        </p>
        <p className="text-customGray text-[18px] mb-[46px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white font-bold py-3 px-6 w-[222px] hover:bg-[#A57B2A] transition-all duration-300">
          BUY NOW
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
