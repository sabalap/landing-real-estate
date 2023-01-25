import clutch from "../../assets/images/clutch.png";
import avatar from "../../assets/images/avatar.png";
import avatar2 from "../../assets/images/avatar2.png";
import testimonial3 from "../../assets/images/testimonial3.png";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const Testimonials = () => {
  return (
    <section className="bg-[#EFEDEB] h-[57.5rem] relative">
      <div className="2xl:w-[97.5rem] mx-auto h-full 2xl:px-0 px-12">
        <div className="flex h-full">
          <div className="border-r border-[#cccccc] 2xl:w-[30rem] lg:w-[20rem]">
            <h1 className="pt-20 mb-12 w-[20.875rem] font-medium 2xl:text-[3.5rem] lg:text-[2.5rem] leading-[4.75rem] text-black">
              Clutch Testimonials
            </h1>
            <img className="img" src={clutch} alt="clutch" />
          </div>
          <div className="h-[46rem] flex flex-col">
            <div className="flex">
              <div className="bg-white p-10 rounded-2xl border 2xl:w-[30rem] lg:w-[22rem] ml-[3.75rem] mt-20 h-[24.25rem] border-[#cccccc]">
                <h3 className="font-bold 2xl:text-2xl lg:text-lg leading-9 text-black mb-10">
                  “Real estate is home to dreamers, designers, and builders. For
                  an industry that is all about vision, augmented reality can
                  give innovators the power to bring their ideas to life.”
                </h3>
                <div className="flex items-center">
                  <div>
                    <img className="img mr-4" src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black">
                      Patrick Chandroke
                    </h3>
                    <p className="font-medium text-base text-[#787B79]">
                      Technical Manager, Neste
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-2xl border 2xl:w-[30rem] lg:w-[22rem] ml-[3.75rem] mt-20 h-[31rem] border-[#cccccc]">
                <h3 className="font-bold 2xl:text-2xl lg:text-lg leading-9 text-black mb-10">
                  “Real estate is home to dreamers, designers, and builders. For
                  an industry that is all about vision, augmented reality can
                  give innovators the power to bring their ideas to life. For an
                  industry that is all about vision, augmented reality can give
                  innovators the power to bring their ideas to life.”
                </h3>
                <div className="flex items-center">
                  <div>
                    <img className="img mr-4" src={avatar2} alt="avatar" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black">Pluto Nash</h3>
                    <p className="font-medium text-base text-[#787B79]">
                      QA Engineer, Microsoft
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-20 right-1"
                src={testimonial3}
                alt=""
              />
            </div>
            <div className="h-[11.5rem] w-[61rem] border-t border-[#cccccc] 2xl:w-[78.75rem] absolute bottom-0">
              <div className="h-full 2xl:w-[67.6495rem] 2xl:pr-0 lg:pr-12 flex items-center justify-between">
                <div>
                  <span className="absolute top-[50%] left-[3.75rem] 2xl:w-28 lg:w-20 bg-black h-[0.1875rem]"></span>
                  <span className="absolute top-[50.6%] left-[7.75rem] 2xl:w-[30rem] lg:w-[22rem] bg-[#CCCCCC] h-[0.0625rem]"></span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex justify-center items-center w-16 h-16 rounded-[3rem] border-2 opacity-20 border-black">
                    <img src={leftArrow} alt="" />
                  </div>
                  <div className="flex justify-center shadow-md items-center w-16 h-16 rounded-[3rem] border-2 opacity-60 border-black">
                    <img src={rightArrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
