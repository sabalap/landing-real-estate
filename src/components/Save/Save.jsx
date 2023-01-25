import tablet1 from "../../assets/images/tablet1.png";
import mobile1 from "../../assets/images/mobile1.png";
import mobile2 from "../../assets/images/mobile2.png";
import tablet2 from "../../assets/images/tablet2.png";
const Save = () => {
  return (
    <section className="bg-black h-[67.5rem]">
      <div className="2xl:w-[99rem] 2xl:px-0 px-12 mx-auto relative py-36 h-full">
        <img src={tablet1} alt="" />
        <img
          className="absolute bottom-36 left-20 mt-10"
          src={mobile2}
          alt=""
        />
        <h1 className="text-center -mt-[6.175rem] mx-auto w-[65.1875rem] 2xl:w-auto lg:w-[35rem] 2xl:text-[6rem] lg:text-[4rem] font-bold text-white">
          Save 70% of your resource{" "}
          <span className="text-[#00C1CC]">with AR tools</span>
        </h1>
        <p className="text-center mb-12 mt-8 font-medium text-4xl text-white">
          Affect what happens next
        </p>
        <div className="w-full flex justify-center">
          <button className="mb-[5.5rem] mx-auto w-[11.8125rem] font-bold text-black text-base bg-[#00C1CC] border-2 h-16 border-black rounded-xl">
            Book a Call
          </button>
        </div>
        <p className="text-center mb-2 font-medium text-lg text-white">
          Want more info before commiting?
        </p>
        <div className="flex justify-center">
          <div className="w-[6.375rem] border-b-2 border-b-[#00C1CC]">
            <p className="font-bold text-lg text-white">Browse FAQ</p>
          </div>
        </div>
        <img className="absolute top-36 right-20" src={mobile1} alt="" />
        <img
          className="absolute bottom-36 2xl:right-0 lg:right-12"
          src={tablet2}
          alt=""
        />
      </div>
    </section>
  );
};

export default Save;
