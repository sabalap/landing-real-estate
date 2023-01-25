import readnow from "../../assets/images/readnow.png";
import hashtag from "../../assets/images/hashtag.png";
import phone1 from "../../assets/images/phone1.png";
import phone2 from "../../assets/images/phone2.png";
import readnowMobile from "../../assets/images/readnowMobile.png";
const Resources = () => {
  return (
    <section className="bg-[#FFFCFA] py-40">
      <div className="2xl:w-[97.5rem] mx-auto 2xl:px-0 px-12">
        <div className="flex justify-between items-center mb-[5.5rem]">
          <div>
            <h1 className="w-[38.375rem] font-bold text-black text-[3.5rem] leading-[4.75rem]">
              Get the resources that matter
            </h1>
          </div>
          <div>
            <h4 className="mb-8 text-2xl leading-9 font-medium text-[#787B79]">
              Join the world’s top companies—and take action
            </h4>
            <button className="w-[11.8125rem] font-bold text-black text-base bg-transparent border-2 h-16 border-black rounded-xl">
              Book a Call
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex">
            <div className="bg-[#CBE2F9] rounded-tl-2xl rounded-bl-2xl p-8 w-[21.5rem] h-[30.5rem]">
              <div className="bg-white w-[7.6875rem] mb-6 font-bold flex items-center justify-center text-base text-black h-8 rounded-[1.8125rem]">
                #HASHTAG
              </div>
              <h2 className="font-medium text-2xl leading-9 text-black">
                Real estate is home to dreamers, designers, and builders
              </h2>
              <div className="flex items-end 2xl:h-[61%] lg:h-[44%]">
                <div className="flex items-center gap-3">
                  <img src={readnow} alt="" />
                  <h3 className="text-black font-bold text-base">Read Now</h3>
                </div>
              </div>
            </div>
            <img
              className="rounded-tr-2xl rounded-br-2xl 2xl:w-auto 2xl:h-auto lg:w-[20rem]"
              src={hashtag}
              alt=""
            />
          </div>
          <div className="relative">
            <img
              className="rounded-2xl 2xl:h-auto lg:h-full"
              src={phone1}
              alt=""
            />
            <img
              className="absolute bottom-8 left-8"
              src={readnowMobile}
              alt=""
            />
            <h3 className="absolute bottom-11 left-[6.5rem] font-bold text-base text-white">
              Read Now
            </h3>
          </div>
          <div className="relative">
            <img
              className="rounded-2xl 2xl:h-auto lg:h-full"
              src={phone2}
              alt=""
            />
            <img
              className="absolute bottom-8 left-8"
              src={readnowMobile}
              alt=""
            />
            <h3 className="absolute bottom-11 left-[6.5rem] font-bold text-base text-white">
              Read Now
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
