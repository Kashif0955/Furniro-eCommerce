import React from "react";

function FooterSection() {
  const links = [
    {
      title: "Home",
      link: "#", // Placeholder link
    },
    {
      title: "Shop",
      link: "#", // Placeholder link
    },
    {
      title: "About",
      link: "#", // Placeholder link
    },
    {
      title: "Contact",
      link: "#", // Placeholder link
    },
  ];

  const help = [
    {
      title: "Payment Options",
      link: "#", // Placeholder link
    },
    {
      title: "Returns",
      link: "#", // Placeholder link
    },
    {
      title: "Privacy Policies",
      link: "#", // Placeholder link
    },
  ];

  return (
    <footer className="pb-16">
      {/* Separator */}
      <div className="my-8">
        <hr className="border-t border-gray-200" />
      </div>

      {/* Footer Content */}
      <div className="px-4 md:px-[70px] flex justify-between w-full flex-col md:flex-row gap-8">
        {/* Logo and Address */}
        <div>
          <img src="src/assets/images/footer_logo.png" alt="footer logo" />
          <div className="text-customGray mt-[50px]">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </div>
        </div>

        {/* Links Section */}
        <div>
          <p className="text-customGray text-normal mb-[55px]">Links</p>
          <div className="flex flex-col gap-[46px] font-medium text-black">
            {links.map((link, index) => (
              <a
                href={link.link}
                key={index}
                className="hover:text-[#B88E2F]" // Hover color change
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div>
          <p className="text-customGray text-normal mb-[55px]">Help</p>
          <div className="flex flex-col gap-[46px] font-medium text-black">
            {help.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="hover:text-[#B88E2F]" // Hover color change
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <p className="text-customGray text-normal mb-[55px]">Newsletter</p>
          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border rounded px-4 py-2 w-full"
            />
            <button className="font-medium underline underline-offset-[6px] hover:text-[#B88E2F]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 md:px-[70px]">
        <div className="py-8 pt-[48px]">
          <hr className="border-t border-gray-200" />
        </div>
        <p className="text-customGray">2023 furino. All rights reserved</p>
      </div>
    </footer>
  );
}

export default FooterSection;
