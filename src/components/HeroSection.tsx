const HeroSection = () => {
  return (
    <section className="relative hero-bg lg:h-screen inset-0 w-full bg-black text-white bg-[size:60px_60px]">
      <div className="lg:w-[48%] sm:w-4/5 w-5/5 sm:mx-auto mx-3 text-center lg:py-36 py-28">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold lg:mt-20 mt-6">
          Manage your{" "}
          <span className="block text-gray-200">finances with split</span>{" "}
        </h1>
        <p className="my-6 lg:text-base sm:text-lg text-base">
          Save financial goals, save money and manage your finances, All the
          financial tools for your goals in one place create different sub
          accounts for your individual needs all with split
        </p>
        <a
          href="/"
          className="font-semibold block lg:w-3/5 w-4/5 mx-auto text-center lg:mt-0 mt-4 lg:py-3 py-[0.65rem] bg-gray-100 text-black rounded-md text-base"
        >
          Join the waitlist
        </a>
      </div>
      <div className="lg:w-[400px] sm:w-[350px] w-full aspect-[3/3] blur-3xl absolute top-[60%] lg:left-[50%] sm:left-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] overflow-hidden">
        <div className="h-[300px] w-[300px] bg-gradient-to-r from-gray-50/25 to-slate-50/25 rounded-full blur-3xl animated-blob"></div>
      </div>
    </section>
  );
};

export default HeroSection;
