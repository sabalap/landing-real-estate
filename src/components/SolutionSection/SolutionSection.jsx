import arBuilding from "../../assets/images/ar-building.png";
import interior from "../../assets/images/interior.png";
import xr from "../../assets/images/xr.png";
import { useState } from "react";
const SolutionSection = () => {
  const [active, setActive] = useState(1);
  const entToEndHandler = () => {
    setActive(1);
  };
  const augmentingHandler = () => {
    setActive(2);
  };
  const technicalHandler = () => {
    setActive(3);
  };
  return (
    <section className="bg-[#CBE2F9] pt-[11.625rem] pb-36">
      <div className="2xl:w-[97.5rem] 2xl:px-0 px-12 mx-auto">
        <h3 className="font-bold text-lg mb-4">Benefits</h3>
        <div className="flex justify-between items-center mb-[5.5rem]">
          <h2 className="text-4xl font-medium">What is AR in Real Estate:</h2>
          <button className="w-[11.8125rem] font-bold text-black text-base bg-transparent border-2 h-16 border-black rounded-xl">
            Talk to us
          </button>
        </div>
        <div className="pb-[4rem]">
          <div className="flex gap-16 border-b border-[#A2B5C7] h-[4rem]">
            <h2
              onClick={entToEndHandler}
              className={`${
                active === 1
                  ? "cursor-pointer text-2xl text-black font-bold"
                  : "cursor-pointer text-2xl text-[#778A9C] font-bold"
              }`}
            >
              End-to-End Development
            </h2>
            <h2
              onClick={augmentingHandler}
              className={`${
                active === 2
                  ? "cursor-pointer text-2xl text-black font-bold"
                  : "cursor-pointer text-2xl text-[#778A9C] font-bold"
              }`}
            >
              Augmenting Teams
            </h2>
            <h2
              onClick={technicalHandler}
              className={`${
                active === 3
                  ? "cursor-pointer text-2xl text-black font-bold"
                  : "cursor-pointer text-2xl text-[#778A9C] font-bold"
              }`}
            >
              Technical Expertise
            </h2>
          </div>
          <div className="bg-black h-[0.1875rem] w-[18.3125rem] -mt-[0.05rem]"></div>
        </div>
        {active === 1 && (
          <div className="flex justify-between">
            <div className="2xl:w-[31.1875rem] w-[24rem] 2xl:h-[28.5625rem] bg-white rounded-2xl p-16">
              <img className="mb-12" src={arBuilding} alt="" />
              <h3 className="font-bold 2xl:text-4xl text-xl mb-6">
                AR Building App for Sales Team
              </h3>
              <p className="2xl:text-lg text-base font-medium text-[#677788]">
                Some description about benefit
              </p>
            </div>
            <div className="2xl:w-[31.1875rem] w-[24rem] 2xl:h-[28.5625rem] bg-white rounded-2xl p-16">
              <img className="mb-12" src={interior} alt="" />
              <h3 className="font-bold 2xl:text-4xl text-xl mb-6">
                Interior Design
              </h3>
              <p className="2xl:text-lg text-base font-medium text-[#677788]">
                Some description about benefit
              </p>
            </div>
            <div className="2xl:w-[31.1875rem] w-[24rem] 2xl:h-[28.5625rem] bg-white rounded-2xl p-16">
              <img className="mb-12" src={xr} alt="" />
              <h3 className="font-bold 2xl:text-4xl text-xl mb-6">
                Construction XR Training Product
              </h3>
              <p className="2xl:text-lg text-base font-medium text-[#677788]">
                Some description about benefit
              </p>
            </div>
          </div>
        )}
        {active === 2 && (
          <div className="flex justify-between">
            <div className="2xl:w-[31.1875rem] w-[24rem] 2xl:h-[28.5625rem] bg-white rounded-2xl p-16">
              <img className="mb-12" src={arBuilding} alt="" />
              <h3 className="font-bold 2xl:text-4xl text-xl mb-6">
                AR Building App for Sales Team
              </h3>
              <p className="2xl:text-lg text-base font-medium text-[#677788]">
                Some description about benefit
              </p>
            </div>
            <div className="2xl:w-[31.1875rem] w-[24rem] 2xl:h-[28.5625rem] bg-white rounded-2xl p-16">
              <img className="mb-12" src={interior} alt="" />
              <h3 className="font-bold 2xl:text-4xl text-xl mb-6">
                Interior Design
              </h3>
              <p className="2xl:text-lg text-base font-medium text-[#677788]">
                Some description about benefit
              </p>
            </div>
            <div className="2xl:w-[31.1875rem] w-[24rem] 2xl:h-[28.5625rem] bg-white rounded-2xl p-16">
              <img className="mb-12" src={xr} alt="" />
              <h3 className="font-bold 2xl:text-4xl text-xl mb-6">
                Construction XR Training Product
              </h3>
              <p className="2xl:text-lg text-base font-medium text-[#677788]">
                Some description about benefit
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionSection;
