import MobileOne from "../assets/images/mobile_one.svg";
import MobileTwo from "../assets/images/mobile_two.svg";
import MobileThree from "../assets/images/mobile_three.svg";

const EarlyAccessCTASection = () => {
  return (
    <section className="lg:px-28 sm:px-8 px-4 lg:py-28 py-20 bg-white">
      <div className="container mx-auto">
        <div className="lg:w-[70%] sm:w-4/5 w-5/5 sm:mx-auto mx-3 text-center lg:pb-24 pb-8">
          <h1 className="sm:text-3xl text-xl font-bold text-[#4A2FD3]">
            Millions of people feel overwhelmed by their finances. Juggling
            bills, tracking expenses, and sticking to a budget can be a constant
            challenge.
          </h1>
          <p className="my-6 lg:text-base sm:text-lg text-base">
            Split solves it all
          </p>
          <div className="mt-14">
            {" "}
            <a
              href="/"
              className="text-white py-4 xl:px-8 lg:px-4 px-8 shadow-[4px_4px_0px_0px_#D8D8D8] rounded-full bg-[#4A2FD3] hover:shadow-[2px_2px_0px_0px_#94a3b8] transition-all duration-150 border-[1px] border-white"
            >
              Join waitlist
            </a>
          </div>
        </div>
        <div className="my-8 flex flex-row lg:flex-wrap items-center lg:justify-center justify-start snap-x snap-mandatory w-full mx:auto overflow-x-scroll overflow-y-hidden py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] lg:gap-10 gap-8">
          <div>
            <div className="w-[20rem] aspect-[3/4.9] snap-center">
              <img src={MobileOne} alt="Mobile one" className="w-full h-full" />
            </div>
          </div>
          <div>
            <div className="w-[20rem] aspect-[3/4.9] snap-center">
              <img
                src={MobileTwo}
                alt="Mobile two"
                className="w-full h-full rotate-[13deg]"
              />
            </div>
          </div>
          <div>
            <div className="w-[20rem] aspect-[3/4.9] snap-center">
              <img
                src={MobileThree}
                alt="Mobile three"
                className="w-full h-full rotate-[23deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessCTASection;
