import IntroPic from "../assets/icons/intro-pic.svg";

const HeroSection = () => {
  return (
    <section className="relative hero-bg inset-0 w-full bg-black text-white bg-[size:60px_60px]">
      <div className="container mx-auto">
        <div className="lg:px-28 sm:px-8 px-6 lg:py-36 py-36 grid lg:grid-cols-6 grid-cols-4 items-center gap-8">
          <div className="lg:col-span-3 sm:col-span-2 col-span-4">
            <h1 className="lg:text-5xl text-4xl font-medium text-white">
              Take Control of Your Finances. Join the Split Waitlist!
            </h1>
            <h2 className="lg:text-lg text-lg text-[#C3C3C3] font-normal mt-8 mb-12">
              Sign up today and be among the first to experience a revolutionary
              financial management tool designed to empower you.
            </h2>
            <div className="flex lg:flex-row flex-col lg:items-start lg:justify-start justify-center items-center gap-6 w-full">
              <a
                href="/"
                className="text-white py-4 xl:px-8 lg:px-4 px-10 shadow-[4px_4px_0px_0px_#fff] rounded-full bg-black hover:shadow-[2px_2px_0px_0px_#94a3b8] transition-all duration-150"
              >
                Get early access
              </a>
              <a
                href="/"
                className="text-black py-4 xl:px-8 lg:px-4 px-12 shadow-[4px_4px_0px_0px_#585858] rounded-full bg-white hover:shadow-[2px_2px_0px_0px_#94a3b8] transition-all duration-150"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 sm:col-span-2 col-span-4 lg:mt-0 mt-8">
            <div className="lg:w-4/5 w-5/5 mx-auto lg:h-[30rem] h-[18rem] lg:-translate-y-4 -translate-y-0">
              <img
                src={IntroPic}
                alt="Intro Picture"
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[500px] sm:w-[450px] w-full aspect-[3/3] blur-3xl absolute lg:top-[60%] top-[30%] lg:left-[50%] sm:left-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] overflow-hidden">
          <div className="h-[400px] w-[400px] bg-gradient-to-r from-gray-50/25 to-slate-50/25 rounded-full blur-3xl animated-blob"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
