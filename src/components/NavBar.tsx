import { useRef } from "react";

const NavBar = () => {
  const menu = useRef<HTMLDivElement>(null);
  const navItem = useRef<HTMLDivElement>(null);

  const menuHandler = () => {
    menu.current?.classList.toggle("hamburger-toggle");
    navItem.current?.classList.toggle("hidden");
  };

  return (
    <>
      <nav className="text-white bg-transparent backdrop-blur-md lg:grid lg:grid-cols-8 gap-6 lg:h-20 h-14 lg:items-center fixed top-0 z-30 lg:px-14 sm:px-8 px-6 w-full">
        <div className="lg:col-span-1">
          <a
            href="/"
            className="lg:relative lg:top-0 lg:left-0 fixed top-4 left-6"
          >
            Split Logo
          </a>
        </div>
        <div
          ref={navItem}
          className="lg:bg-transparent bg-black lg:col-span-7 col-span-8 lg:grid grid-cols-6 hidden lg:relative lg:top-0 lg:left-0 fixed top-0 left-0 lg:h-16 h-[100vh] w-full z-20 lg:px-0 px-6 font-semibold lg:overflow-y-hidden overflow-y-scroll"
        >
          <ul className="col-span-5 flex lg:flex-row flex-col lg:items-center items-start justify-center text-base lg:space-y-0 space-y-5 lg:mt-0 mt-10">
            <li>
              <a href="" className="py-2 lg:px-4 px-2 lg:mx-3">
                Features
              </a>
            </li>
            <li>
              <a href="" className="py-2 lg:px-4 px-2 lg:mx-3">
                Community
              </a>
            </li>
            <li>
              <a href="" className="py-2 lg:px-4 px-2 lg:mx-3">
                About
              </a>
            </li>
            <li>
              <a href="" className="py-2 lg:px-4 px-2 lg:mx-3">
                Use cases
              </a>
            </li>
          </ul>
          <div className="col-span-1 flex flex-row items-center lg:mb-0 mb-8">
            <a
              href="/"
              className="block text-center w-full lg:mt-0 mt-4 py-2 bg-gray-100 text-black rounded-md"
            >
              Join the waitlist
            </a>
          </div>
        </div>

        <div ref={menu} className="lg:hidden block">
          <div
            onClick={menuHandler}
            className="fixed top-7 right-6 w-8 h-[2px] bg-white rounded-full before:w-8 before:h-[2px] before:bg-white before:rounded-full before:content-[''] before:absolute before:-translate-y-2 before:transition-all before:duration-150 after:w-8 after:h-[2px] after:bg-white after:rounded-full after:content-[''] after:absolute after:translate-y-2 after:transition-all after:duration-150 z-40"
          ></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
