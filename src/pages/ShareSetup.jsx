import React from "react";

function ShareSetupSection() {
  return (
    <section className="my-5">
      <div>
        <p className="text-[32px] font-bold text-center">
          Share your setup with
        </p>
        <p className=" text-customGray text-center" style={{fontSize:'20px'}}>#FuniroFurniture</p>
      </div>
      <div className="">
        <img
          src="src/assets/images/share_your_setup.png"
          alt="share setup"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default ShareSetupSection;
