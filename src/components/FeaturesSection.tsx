/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import GoalOriented from "../assets/icons/goal-oriented.svg";
import NewApproach from "../assets/icons/new-approach.svg";
import CardHand from "../assets/icons/card-hand.svg";
import EffortlessBudgeting from "../assets/icons/effortless-budgeting.svg";

const FeaturesSection = () => {
  const features = [
    {
      title: "Clear Insights",
      image: NewApproach,
      description:
        "See exactly where your money goes with automatic spending categorization.",
      linkTitle: "Learn more",
      link: "/",
    },
    {
      title: "Secure Virtual Card",
      image: CardHand,
      description:
        "Make secure online payments with a virtual card generated directly from Split.",
      linkTitle: "Join waitlist",
      link: "/",
    },

    {
      title: "Effortless Budgeting",
      image: EffortlessBudgeting,
      description:
        "Create and track personalized budgets within each separate account for ultimate control.",
      linkTitle: "Learn more",
      link: "/",
    },
    {
      title: "Goal-Oriented",
      image: GoalOriented,
      description:
        "Track your progress towards financial goals and stay motivated.",
      linkTitle: "Learn more",
      link: "/",
    },
  ];
  return (
    <section className="lg:px-28 sm:px-8 px-4 lg:py-14 py-20 bg-[#F7F7F7]">
      <div className="container mx-auto">
        <div className="my-8 grid grid-cols-6 gap-8 [&>div:nth-child(1):hover]:bg-black [&>div:nth-child(1)]:text-[#4A2FD3] [&>div:nth-child(1):hover]:text-white [&>div:nth-child(1):hover>div>div>img]:block [&>div:nth-child(2)>div>div>img:hover]:rotate-[23deg] [&>div:nth-child(2)>div>div>img:hover]:-bottom-5 [&>div:nth-child(2)>div>div>img:hover]:-right-16 [&>div:nth-child(3)]:bg-black [&>div:nth-child(3)]:text-white [&>div:nth-child(3):hover]:bg-white [&>div:nth-child(3):hover]:text-[#4A2FD3] [&>div:nth-child(3):hover>div>div>img]:block [&>div:nth-child(4)]:bg-black [&>div:nth-child(4)]:text-white [&>div:nth-child(4):hover]:bg-white [&>div:nth-child(4):hover]:text-[#4A2FD3] [&>div:nth-child(4):hover>div>div>img]:block">
          {features.map((data: any, index: number) => (
            <Fragment key={index}>
              <div className="lg:col-span-3 sm:col-span-3 col-span-6 bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-3xl pb-6 relative overflow-hidden flex flex-col justify-between cursor-default">
                <div className="px-4 mt-4">
                  <h1 className={`lg:text-3xl text-2xl font-semibold`}>
                    {data.title}
                  </h1>

                  <p className="my-4 text-base text-[#959595]">
                    {data.description}
                  </p>

                  <div className="w-full sm:aspect-[3/1.5] aspect-[3/1.4] overflow-hidden">
                    {" "}
                    {index === 1 ? (
                      <img
                        src={data.image}
                        alt={data.alt}
                        className="absolute xl:-bottom-5 lg:bottom-7 bottom-9 right-0 z-[5] transition-all duration-500 ease-in-out"
                      />
                    ) : (
                      <img
                        src={data.image}
                        alt={data.alt}
                        className="hidden absolute xl:-bottom-5 lg:bottom-7 bottom-9 right-0 z-[5] w-[70%]"
                      />
                    )}
                  </div>
                  <div className="mt-8 mb-4 z-[10] relative">
                    <a
                      href={data.link}
                      className={`text-black py-3 xl:px-8 lg:px-4 px-12 shadow-[4px_4px_0px_0px_#585858] ${
                        index === 3 ? "shadow-[4px_4px_0px_0px_#000]" : ""
                      } rounded-full bg-white hover:shadow-[2px_2px_0px_0px_#94a3b8] transition-all duration-150 border-[1px] border-[#4A2FD3]`}
                    >
                      {data.linkTitle}
                    </a>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
