/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from "react";
import ImageOne from "../assets/images/image_one.svg";
import ImageTwo from "../assets/images/image_two.svg";
import ImageThree from "../assets/images/image_three.svg";

const ManageAssetsSection = () => {
  const items = [
    {
      imageURL: ImageOne,
      alt: "Image one",
      price: "₦ 5000",
      category: "Groceries",
      title: "Feeding",
      splitSave: "Feeding acc..",
      total: "₦ 3,5000",
    },
    {
      imageURL: ImageTwo,
      alt: "Image two",
      price: "₦ 10,500",
      category: "Fashion",
      title: "Shopping",
      splitSave: "Shopping acc..",
      total: "₦ 10,500",
    },
    {
      imageURL: ImageThree,
      alt: "Image three",
      price: "₦ 1,350,000",
      category: "Trip boo...",
      title: "Vacation",
      splitSave: "Family vaca..",
      total: "₦ 4,350,000",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));

  // const handlePrev = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === 0 ? items.length - 1 : prevIndex - 1
  //   );
  // };

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === items.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  const setActive = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="lg:px-12 sm:px-8 px-4 lg:py-20 py-20">
      <div className="lg:w-[55%] sm:w-4/5 w-5/5 sm:mx-auto mx-3 text-center">
        <h1 className="sm:text-5xl text-3xl font-bold">
          Effortlessly Manage Different Spending Needs
        </h1>
        <p className="mt-6 mb-12 lg:text-base sm:text-lg text-base">
          Split empowers you to create separate accounts within one unified
          platform, providing a clear and organized way to manage your finances.
        </p>
      </div>

      <div className="flex justify-center items-center xl:w-3/5 lg:w-[70%] w-5/5 mx-auto lg:h-64 h-[18rem]">
        <div className="flex flex-row items-center sm:justify-center snap-x snap-mandatory w-full mx:auto overflow-x-scroll py-4 gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']']">
          {items.map((item: any, index: number) => (
            <Fragment key={index}>
              <div>
                <div
                  className={`snap-center relative transition-all duration-500 ease-in-out ${
                    index === activeIndex ? "transform scale-110" : ""
                  } ${index === activeIndex ? "z-10" : ""} ${
                    index === activeIndex
                      ? "h-[17rem] w-[12rem] transition-all duration-150 ease-in-out"
                      : "h-[16rem] w-[12rem]"
                  }`}
                >
                  <p className="absolute top-[40%] left-[50%] -translate-x-[50%] text-white font-semibold">
                    {item.price}
                  </p>
                  <div className="absolute top-[55%] left-[50%] -translate-x-[50%] text-black py-[0.3rem] px-6 rounded-full bg-white text-sm">
                    {item.title}
                  </div>
                  <div className="absolute bottom-[5%] left-[50%] -translate-x-[50%] flex flex-row items-start justify-between text-black w-[90%] rounded-lg p-1 bg-white text-sm">
                    <div>
                      <svg
                        width="41"
                        height="38"
                        viewBox="0 0 41 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          width="40.7805"
                          height="38"
                          fill="url(#pattern0_132_2244)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_132_2244"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_132_2244"
                              transform="scale(0.0227273 0.0243902)"
                            />
                          </pattern>
                          <image
                            id="image0_132_2244"
                            width="44"
                            height="41"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p className="font-semibold">{item.category}</p>
                      <p className="text-[#5F5F5F] text-xs">{item.splitSave}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-xs">{item.total}</p>
                    </div>
                  </div>
                  <img
                    src={item.imageURL}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="lg:flex hidden flex-row items-center justify-center gap-4 mt-14">
        {[1, 2, 3].map((_, index: number) => (
          <Fragment key={index}>
            <div
              onClick={() => setActive(index)}
              className={`w-2 h-2 bg-[#D9D9D9] rounded-full cursor-pointer ${
                index === activeIndex ? "bg-black/80" : ""
              }`}
            ></div>
          </Fragment>
        ))}
      </div>
      {/* <div className="lg:flex hidden justify-between items-center px-4 py-2 z-10">
        <button onClick={handlePrev} className="text-black">
          &lt;
        </button>
        <button onClick={handleNext} className="text-black">
          &gt;
        </button>
      </div> */}
    </section>
  );
};

export default ManageAssetsSection;
