import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Logo from "./../assets/icons/logo.png";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo_video from "./../assets/logo.mp4";

const Navbar = () => {
  const [clicked, setClicked] = useState(true);
  const changeToggle = () => {
    setClicked(!clicked);
  };

  return (
    <header className="absolute top-0 pt-5 px-10 lg:px-16 inset-x-0 z-40">
      <nav>
        <div
          className={`fixed h-screen ${
            clicked ? "hidden" : "block"
          } w-screen bg-black/70 inset-0`}
        />
        <div className="flex items-center justify-between ">
          <div className="shrink-0">
            <div className="relative bg-[#9959BA] h-14 md:h-16 lg:h-20 w-14 md:w-16 lg:w-20 rounded-full overflow-hidden shrink-0">
              <video
                className="absolute"
                autoPlay={"autoplay"}
                playsInline
                muted
                loop
              >
                <source src={Logo_video} type="video/mp4" />
              </video>
            </div>
          </div>
          {clicked ? (
            <div
              className="lg:hidden text-black relative z-10"
              onClick={changeToggle}
            >
              <FaBarsStaggered className="text-xl" />
            </div>
          ) : null}
          <div
            className={`lg:max-w-[61vw] w-full flex transition-all ease-in-out duration-500 ${
              clicked
                ? "-translate-x-[100vh] lg:translate-x-0"
                : "translate-x-0"
            } max-w-xs fixed lg:relative flex-col lg:flex-row items-center pb-20 pt-10 lg:p-0 justify-between top-0 left-0 -z-0 h-screen lg:h-auto bg-[#73EFDF] lg:bg-transparent`}
          >
            <div className="flex items-center justify-between w-full px-6 lg:hidden">
              <div className="shrink-0">
                <img className="h-14 md:h-16 lg:h-20" src={Logo} alt="Logo" />
              </div>
              <div
                className="lg:hidden text-black relative z-10"
                onClick={changeToggle}
              >
                <IoClose className="text-2xl" />
              </div>
            </div>
            <ul className="flex items-center gap-10 flex-col lg:flex-row">
              {NavLinks.map((items, idx) => (
                <li key={idx}>
                  <a
                    className="text-xl font-semibold content_text text-black"
                    href={items.url}
                  >
                    {items.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5">
              <a
                href="https://t.co/yW4dBOeUpA?ssr=true"
                className="text-2xl text-black hover:text-[#9959BA] transition-colors ease-in-out duration-300"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://discord.gg/luminaweb3"
                className="text-2xl text-black hover:text-[#9959BA] transition-colors ease-in-out duration-300"
              >
                <FaDiscord />
              </a>
              <a
                href="https://x.com/icepopcoin?s=11"
                className="text-2xl text-black hover:text-[#9959BA] transition-colors ease-in-out duration-300"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </nav>
      .
    </header>
  );
};

export default Navbar;

const NavLinks = [
  {
    url: "#buy",
    name: "Buy $ICEPOP",
  },
  {
    url: "#about",
    name: "About",
  },
  {
    url: "#token",
    name: "Tokenomics",
  },
  {
    url: "#faq",
    name: "FAQ",
  },
];
