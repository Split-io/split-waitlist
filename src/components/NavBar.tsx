import { useRef, useEffect, useState } from "react";
import Logo from "../assets/icons/logo.svg";
const NavBar = () => {
  const menu = useRef<HTMLDivElement>(null);
  const navItem = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuHandler = () => {
    menu.current?.classList.toggle("hamburger-toggle");
    navItem.current?.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-white backdrop-blur-md grid grid-cols-8 xl:gap-6 lg:h-20 h-14 lg:items-center fixed top-5 left-[50%] -translate-x-[50%] z-30 lg:px-4 sm:px-8 px-6 sm:w-4/5 lg:w-[88%] xl:w-[84%] 2xl:w-3/5 w-[93%] mx-auto bg-[#ffffff0f] rounded-full  ${
        isScrolled ? "bg-black/90" : ""
      }`}
    >
      <div className="lg:col-span-1 xl:col-span-2 col-span-2">
        <a
          href="/"
          className="lg:relative lg:top-0 lg:left-0 fixed top-2 left-2 flex flex-row items-center sm:gap-1 xl:gap-1 lg:gap-0"
        >
          <div className="xl:w-16 xl:h-16 lg:w-14 lg:h-14 w-10 h-10">
            {" "}
            <img src={Logo} alt="Logo" className="w-full h-full" />
          </div>

          <span className="xl:text-4xl lg:text-[1.7em] text-xl font-bold">
            Split
          </span>
        </a>
      </div>
      <div
        ref={navItem}
        className="lg:bg-transparent bg-black xl:col-span-6 lg:col-span-7 col-span-8 lg:grid grid-cols-6 hidden lg:relative lg:top-0 lg:left-0 fixed top-0 left-0 lg:h-16 h-[95vh] w-full z-20 lg:px-0 px-6 font-semibold overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        <ul className="col-span-4 flex lg:flex-row flex-col lg:items-center items-start justify-center text-base lg:space-y-0 space-y-5 lg:mt-0 mt-10 text-[#8C8989]">
          <li>
            <a href="" className="py-2 lg:px-4 px-2 lg:mx-3">
              About
            </a>
          </li>
          <li>
            <a href="" className="py-2 lg:px-4 px-2 lg:mx-3">
              Community
            </a>
          </li>
          <li>
            <a href="" className="py-2 lg:px-4 px-2 lg:mx-3">
              Features
            </a>
          </li>
          <li>
            <a href="" className="py-2 lg:px-4 px-2 lg:mx-3">
              Use cases
            </a>
          </li>
        </ul>
        <div className="col-span-2 flex flex-row lg:items-start items-center lg:justify-end justify-center lg:mb-0 mb-8 mr-4">
          <a
            href="/"
            className="text-white py-4 xl:px-8 lg:px-4 px-8 shadow-[4px_4px_0px_0px_#fff] rounded-full bg-black hover:shadow-[2px_2px_0px_0px_#94a3b8] transition-all duration-150"
          >
            Get early access
          </a>
        </div>
      </div>

      <div ref={menu} className="lg:hidden block">
        <div
          onClick={menuHandler}
          className="fixed top-7 right-5 w-8 h-[2px] bg-white rounded-full before:w-8 before:h-[2px] before:bg-white before:rounded-full before:content-[''] before:absolute before:-translate-y-2 before:transition-all before:duration-150 after:w-8 after:h-[2px] after:bg-white after:rounded-full after:content-[''] after:absolute after:translate-y-2 after:transition-all after:duration-150 z-40"
        ></div>
      </div>
    </nav>
  );
};

export default NavBar;
