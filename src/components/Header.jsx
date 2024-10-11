import React, { useState } from "react";

// Simplified icons for React (Replace these with actual SVGs or image paths)
import { FaBars, FaTimes, FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

// Dummy cart data for badge value
const cartValue = [1, 2, 3];

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [menu, setMenu] = useState(false);

  const links = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/products" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const icons = [
    { icon: <FaUser />, alt: "User", action: () => console.log("User clicked") },
    { icon: <FaSearch />, alt: "Search", action: () => console.log("Search clicked") },
    { icon: <FaHeart />, alt: "Favorites", action: () => console.log("Favorites clicked") },
    {
      icon: <FaShoppingCart />,
      alt: "Cart",
      action: () => setShowCart(!showCart),
      badgeValue: cartValue.length,
    },
  ];

  const toggleMenu = () => setMenu(!menu);

  return (
    <div className="relative">
      {/* Desktop View */}
      <div className="hidden lg:block bg-white p-4">
        <div className="flex justify-between items-center mx-[41px]">
          {/* Logo */}
          <a href="/">
            <img src="src/assets/images/logo.png" alt="logo" />
          </a>

          {/* Links */}
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-black hover:text-[#B88E2F] font-bold text-[16px]" // Updated font size and bold
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-[40px]">
            {icons.map((icon, index) => (
              <div key={index} className="relative">
                <div onClick={icon.action} className="cursor-pointer">
                  {icon.icon}
                </div>
                {icon.badgeValue && (
                  <span className="absolute -top-3 -right-5 bg-red-500 text-white text-xs rounded-full px-2">
                    {icon.badgeValue}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden bg-white py-4 fixed top-0 w-full">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <a href="/">
            <img src="src/assets/images/logo.png" alt="logo" className="w-[7rem]" />
          </a>

          {/* Menu Icon */}
          <div onClick={toggleMenu} className="cursor-pointer">
            {menu ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>

        {/* Mobile Links */}
        {menu && (
          <div className="flex flex-col items-center gap-4 mt-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-black hover:text-[#B88E2F] font-bold text-[16px]" // Updated font size and bold for mobile
              >
                {link.title}
              </a>
            ))}
            <div className="flex gap-6 mt-4">
              {icons.map((icon, index) => (
                <div key={index} onClick={icon.action} className="cursor-pointer">
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Cart Overlay */}
      {showCart && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"
          onClick={() => setShowCart(false)}
        >
          {/* Cart Section (can replace with your actual cart content) */}
          <div className="fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg z-20 p-4">
            <h2>Your Cart</h2>
            <p>Items: {cartValue.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
