// import React, { useEffect, useState } from "react";

// // Simplified Component
// export default function ProductDetailShowcaseSection({ productId }) {
//   const MAX_QUANTITY = 5;

//   const mini = [
//     "/images/sofa_mini.png",
//     "/images/sofa_mini.png",
//     "/images/sofa_mini.png",
//     "/images/sofa_mini.png",
//   ];

//   const extraDetailsData = [
//     { item: "SKU", value: "SS001" },
//     { item: "Category", value: "Sofas" },
//     { item: "Tags", value: "Sofa, Chair, Home, Shop" },
//     { item: "Share", value: "Social Media Links Here" },
//   ];

//   const [quantity, setQuantity] = useState(1);
//   const [isMounted, setIsMounted] = useState(false);
//   const [cart, setCart] = useState([]);

//   const handleQuantityDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handleQuantityIncrement = () => {
//     if (quantity < MAX_QUANTITY) setQuantity(quantity + 1);
//   };

//   const handleAddToCart = () => {
//     const productInCart = cart.find((product) => product.id === productId);

//     const productObject = {
//       id: productId,
//       quantity,
//       productName: "Sample Product",
//       unitPrice: 1000, // Static value for simplicity
//     };

//     if (productInCart) {
//       const updatedCart = cart.map((product) =>
//         product.id === productId ? productObject : product
//       );
//       setCart(updatedCart);
//     } else {
//       setCart((prevCart) => [...prevCart, productObject]);
//     }

//     alert("Product added to cart successfully");
//   };

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <section className="product-details">
//       {/* LHS */}
//       <div className="flex gap-8">
//         <div className="mini-images hidden md:inline-flex flex-col gap-8">
//           {mini.map((item, index) => (
//             <img key={index} src={item} alt="mini view" className="mini-img" />
//           ))}
//         </div>
//         <div className="product-image">
//           <img
//             src="/images/sofa.png" // Replace with dynamic product image
//             alt="Product"
//             className="main-img"
//           />
//         </div>
//       </div>

//       {/* RHS */}
//       <div>
//         <p className="product-title">Sample Product Name</p>
//         <p className="product-price">Rs. 1000</p>

//         <p className="description">
//           This is a sample product description. Add your product's unique details here.
//         </p>

//         <div className="quantity-selector flex gap-4 items-center mt-4">
//           <button onClick={handleQuantityDecrement}>-</button>
//           <p>{quantity}</p>
//           <button onClick={handleQuantityIncrement}>+</button>
//         </div>

//         <button className="add-to-cart" onClick={handleAddToCart}>
//           Add to Cart
//         </button>

//         <div className="extra-details mt-4">
//           {extraDetailsData.map((item, index) => (
//             <div key={index} className="flex gap-4">
//               <p>{item.item}:</p>
//               <p>{item.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";

// Sample product data (replace this with your actual data source)
const productData = [
  {
    id: "1",
    imageUrl: "https://example.com/image1.jpg",
    title: "Product 1",
    description: "Description for Product 1",
    price: "$20",
    miniImages: [
      "https://example.com/image1_mini1.jpg",
      "https://example.com/image1_mini2.jpg",
    ],
    extraDetails: [
      { item: "Color", value: "Red" },
      { item: "Size", value: "M" },
    ],
  },
  {
    id: "2",
    imageUrl: "https://example.com/image2.jpg",
    title: "Product 2",
    description: "Description for Product 2",
    price: "$30",
    miniImages: [
      "https://example.com/image2_mini1.jpg",
      "https://example.com/image2_mini2.jpg",
    ],
    extraDetails: [
      { item: "Color", value: "Blue" },
      { item: "Size", value: "L" },
    ],
  },
  // Add more products as needed
];

export default function ProductDetailShowcaseSection({ productId }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const MAX_QUANTITY = 5;

  useEffect(() => {
    // Fetch product details based on productId
    const foundProduct = productData.find((p) => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; // Loading state
  }

  const handleQuantityDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleQuantityIncrement = () => {
    if (quantity < MAX_QUANTITY) setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Logic to add product to cart
    alert("Product added to cart successfully");
  };

  return (
    <section className="product-details">
      <div className="flex gap-8">
        {/* Mini Images Section */}
        <div className="mini-images hidden md:inline-flex flex-col gap-8">
          {product.miniImages && product.miniImages.map((item, index) => (
            <img key={index} src={item} alt="mini view" className="mini-img" />
          ))}
        </div>
        {/* Main Product Image */}
        <div className="product-image">
          <img
            src={product.imageUrl} // Use dynamic product image
            alt="Product"
            className="main-img"
          />
        </div>
      </div>

      {/* Product Details Section */}
      <div>
        <p className="product-title">{product.title}</p>
        <p className="product-price">{product.price}</p>
        <p className="description">{product.description}</p>

        {/* Quantity Selector */}
        <div className="quantity-selector flex gap-4 items-center mt-4">
          <button onClick={handleQuantityDecrement}>-</button>
          <p>{quantity}</p>
          <button onClick={handleQuantityIncrement}>+</button>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* Extra Details Section */}
        <div className="extra-details mt-4">
          {product.extraDetails.map((item, index) => (
            <div key={index} className="flex gap-4">
              <p>{item.item}:</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

