const QuickAnalysis = () => {
  return (
    <section className="text-white bg-black lg:px-14 sm:px-8 px-4 lg:py-32 py-16 sm:py-20">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col items-center gap-6 lg:mt-0 mt-2">
          <div className="xl:w-[55%] lg:w-[51%] w-full">
            <h2 className="lg:text-8xl sm:text-5xl text-3xl font-medium lg:text-start text-center">
              Quick analysis of all expenses
            </h2>
            <p className="my-6 lg:text-base sm:text-lg text-base lg:text-start text-center">
              All expenses are reflected automatically in the application and
              the analysis system helps to control them
            </p>
          </div>
          <div className="xl:w-[40%] lg:w-[46%] lg:aspect-[3/2.3] sm:aspect-[3/2.6] aspect-[3/3.6] overflow-hidden w-full sm:w-4/5 relative">
            <div className="absolute lg:top-0 sm:top-[4%] top-[10%] lg:left-[10%] sm:left-[15%] left-0 sm:h-56 sm:w-56 h-44 w-44 border-2 border-gray-100 rounded-full before:absolute before:content-['Family'] before:top-[50%] before:left-[50%] before:-translate-y-[50%] before:-translate-x-[50%]"></div>
            <div className="absolute lg:bottom-0 sm:bottom-0 bottom-[10%] lg:left-[45%] sm:left-[40%] left-[37%] -translate-x-[50%] sm:h-56 h-44 w-44 sm:w-56 border-2 border-gray-100 rounded-full before:absolute before:content-['Health'] before:top-[50%] before:left-[50%] before:-translate-y-[50%] before:-translate-x-[50%]"></div>
            <div className="absolute lg:top-[8%] sm:top-[23%] top-[20%] lg:right-[10%] sm:right-[4%] right-0 sm:h-56 sm:w-56 h-44 w-44 border-2 border-gray-100 rounded-full before:absolute before:content-['Food'] before:top-[50%] before:left-[50%] before:-translate-y-[50%] before:-translate-x-[50%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAnalysis;
