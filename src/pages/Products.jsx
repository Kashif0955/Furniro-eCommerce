import React from "react";
import { motion } from "framer-motion";

// Your JSON Data
const data = [
  {
    id: "1",
    imageUrl: "/src/assets/images/p_1.png",
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    otherPrice: "3.500.000",
    type: "DISCOUNTED",
    typeValue: "-30%",
  },
  {
    id: "2",
    imageUrl: "src/assets/images/p_2.png",
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "2.500.000",
    otherPrice: "3.500.000",
    type: "DISCOUNTED",
    typeValue: "-30%",
  },
  {
    id: "3",
    imageUrl: "src/assets/images/p_3.png",
    title: "Lolito",
    description: "Luxury big sofa",
    price: "7.000.000",
    otherPrice: "14.000.000",
    type: "DISCOUNTED",
    typeValue: "-50%",
  },
  {
    id: "4",
    imageUrl: "src/assets/images/p_4.png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "500.000",
    otherPrice: "",
    type: "NEW",
    typeValue: "New",
  },
  {
    id: "5",
    imageUrl: "/src/assets/images/p_5.png",
    description: "Night lamp",
    price: "1.500.000",
    otherPrice: "",
    type: "NORMAL",
    typeValue: "",
  },
  {
    id: "6",
    imageUrl: "src/assets/images/p_6.png",
    title: "Muggo",
    description: "Small mug",
    price: "150.000",
    otherPrice: "",
    type: "NEW",
    typeValue: "New",
  },
  {
    id: "7",
    imageUrl: "src/assets/images/p_7.png",
    title: "Pingky",
    description: "Cute bed set",
    price: "7.000.000",
    otherPrice: "14.000.000",
    type: "DISCOUNTED",
    typeValue: "-50%",
  },
  {
    id: "8",
    imageUrl: "src/assets/images/p_8.png",
    title: "Potty",
    description: "Minimalist flower pot",
    price: "500.000",
    otherPrice: "",
    type: "NEW",
    typeValue: "New",
  },
];

// ProductCard component
function ProductCard({ id, imageUrl, title, description, price, otherPrice, type, typeValue }) {
  const icons = [
    {
      iconUrl: "src/assets/images/share_icon.png",
      title: "Share",
      action: () => {
        console.log(`Share product with ID: ${id}`);
      },
    },
    {
      iconUrl: "src/assets/images/like_icon.png",
      title: "Like",
      action: () => {
        console.log(`Like product with ID: ${id}`);
      },
    },
  ];

  const cardVariant = {
    initial: { opacity: 0, x: 120, scale: 0.5 },
    animate: { opacity: 1, x: 0, scale: 1 },
  };

  // Determine badge color based on product type
  const badgeClass =
    type === "DISCOUNTED" && typeValue.startsWith("-")
      ? "bg-red-400" // Red for discounted
      : type === "NEW" || typeValue.startsWith("+")
      ? "bg-green-300" // Green for new
      : "bg-gray-300"; // Default gray for normal

  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="animate"
      viewport={{ once: false }}
      transition={{ duration: 0.4 }}
      className="relative shadow-lg  overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="h-[301px] w-full object-cover" />

        {/* Badge for type */}
        {typeValue && (
          <div
            className={`absolute top-[24px] right-[24px] w-[48px] h-[48px] rounded-full text-normal font-medium px-2 text-white flex justify-center items-center ${badgeClass}`}
          >
            {typeValue}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="bg-[#F4F5F7] p-4">
        <p className="text-gray-800 text-xl font-bold">{title}</p>
        <p className="text-gray-600 font-medium text-base py-[8px]">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-800 text-lg font-bold">{price}</p>
          {otherPrice && <p className="line-through text-gray-400">{otherPrice}</p>}
        </div>
      </div>

      {/* Hover Overlay */}
      <motion.div className="absolute p-4 left-0 right-0 top-0 bottom-0 bg-[#3A3A3A]/80" variants={cardVariant}>
        <div className="pt-[30%]">
          {/* View Product Button */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                console.log(`View product with ID: ${id}`);
              }}
              className="bg-white text-[#BE9740] font-bold py-2 px-4 hover:bg-gray "             >
              View product
            </button>
          </div>

          {/* Icons Section (Share & Like) */}
          <div className="flex justify-center gap-5 mt-[24px]">
            {icons.map((icon, index) => (
              <div
                className="flex gap-1 items-center hover:cursor-pointer"
                key={index}
                onClick={icon.action}
              >
                <img src={icon.iconUrl} alt={icon.title} />
                <p className="text-white">{icon.title}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Products List component to map over the data array
function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          description={product.description}
          price={product.price}
          otherPrice={product.otherPrice}
          type={product.type}
          typeValue={product.typeValue}
        />
      ))}
    </div>
  );
}

export default Products;
