import img1 from "../../assets/images/img#1.png";
import img2 from "../../assets/images/img#2.png";
import img3 from "../../assets/images/img#3.png";
import arrow from "../../assets/images/arrow-right.png";
const Resources = () => {
  return (
    <section className="bg-[#000] py-40">
      <div className="w-[97.5rem] mx-auto">
        <div className="flex justify-between items-center mb-[7.1875rem]">
          <div>
            <h1 className="text-white font-bold w-[17.375rem] text-4xl leading-[3.06rem]">
              Key steps about how to use it
            </h1>
          </div>
          <div>
            <h2 className="text-2xl leading-9 font-medium text-[#787B79] w-[31.815rem]">
              Join the world’s top companies—and take action now to reach
              net-zero carbon by 2040.
            </h2>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-12">
            <img className="mr-8" src={img1} alt="" />
            <h1 className="font-medium text-4xl leading-[3.05rem] text-white">
              How your system works is primarily determined by what....
            </h1>
            <button className="mr-auto ml-4 w-[7.315rem] font-bold text-black text-base bg-white h-10 rounded-[6.1875rem]">
              Features
            </button>
            <div className="flex justify-center items-center w-16 h-16 border-2 border-[#00C1CC] rounded-[3rem]">
              <img src={arrow} alt="arrow right" />
            </div>
          </div>
          <div className="flex items-center mb-12">
            <img className="mr-8" src={img2} alt="" />
            <h1 className="font-medium text-4xl leading-[3.05rem] text-white">
              What equipment will you need in your physical...
            </h1>
            <button className="mr-auto ml-4 w-[7.715rem] font-bold text-black text-base bg-white h-10 rounded-[6.1875rem]">
              Hardware
            </button>
            <div className="flex justify-center items-center w-16 h-16 border-2 border-[#00C1CC] rounded-[3rem]">
              <img src={arrow} alt="arrow right" />
            </div>
          </div>
          <div className="flex items-center">
            <img className="mr-8" src={img3} alt="" />
            <h1 className="font-medium text-4xl leading-[3.05rem] text-white">
              When designing your AR instance, you need to know the speed...
            </h1>
            <button className="mr-auto ml-4 w-[5.3125rem] font-bold text-black text-base bg-white h-10 rounded-[6.1875rem]">
              Data
            </button>
            <div className="flex justify-center items-center w-16 h-16 border-2 border-[#00C1CC] rounded-[3rem]">
              <img src={arrow} alt="arrow right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
