import logo from "../../assets/images/logo.png";
import ARImage from "../../assets/images/AR.png";
import marketer from "../../assets/images/marketer.png";
import visa from "../../assets/images/visa.png";
import forbes from "../../assets/images/forbes.png";
import entrepreneur from "../../assets/images/entrepreneur.png";
import uber from "../../assets/images/uber.png";
import microsoft from "../../assets/images/microsoft.png";
import ripple from "../../assets/images/ripple.png";
import mc from "../../assets/images/mc.png";
const Header = () => {
  return (
    <header className="bg-[#FFFCFA]">
      <nav className="pt-9 w-[97.5rem] mx-auto flex justify-between items-center">
        <img className="img" src={logo} alt="Logo" />
        <ul className="w-[27.375rem] flex justify-between font-bold text-base">
          <li>Partners</li>
          <li>Benefits</li>
          <li>Solutions</li>
          <li>How to use</li>
        </ul>
        <button className="bg-black w-[10.315rem] font-bold text-base text-white rounded-xl h-14">
          Book a Call
        </button>
      </nav>
      <section>
        <div className="mb-[3.125rem] flex w-[97.5rem] mx-auto mt-[15.19rem] justify-between">
          <div>
            <h1 className="w-[37rem] text-[4.5rem] font-bold mb-10 leading-[5.625rem]">
              Save 70% of your resource with AR tools
            </h1>
            <p className="font-medium text-[#787B79] mb-14 text-2xl leading-[2.25rem] w-[43rem]">
              Real estate is home to dreamers, designers, and builders. For an
              industry that is all about vision, augmented reality can give
              innovators the power to bring their ideas to life.
            </p>
            <div>
              <button className="w-[11.8125rem] text-base mr-6 font-bold h-16 bg-[#00C1CC] rounded-xl">
                Book a Call
              </button>
              <button className="w-[11.9375rem] font-bold text-black text-base bg-transparent border-2 h-16 border-black rounded-xl">
                Get E-Book
              </button>
            </div>
          </div>
          <div className="-mt-[5rem]">
            <img src={ARImage} alt="AR" />
          </div>
        </div>
        <div className="flex justify-between w-[97.5rem] mx-auto">
          <div>
            <h2 className="w-[38.875rem] mb-10 text-[3.5rem] leading-[4.75rem] font-bold">
              Partnership program in Arttteo
            </h2>
            <button className="w-[11.8125rem] font-bold text-black text-base bg-transparent border-2 h-16 border-black rounded-xl">
              Book a Call
            </button>
          </div>
          <div className="mt-[8.4rem] pb-[6.5rem]">
            <h4 className="font-medium text-2xl mb-6">Meet the lineup</h4>
            <p className="w-[33.75rem] font-medium text-2xl leading-9 text-[#787B79]">
              Real estate is home to dreamers, designers, and builders. For an
              industry that is all about vision...
            </p>
          </div>
        </div>
      </section>
      <section className="border-t border-[#cccccc] h-[17.4375rem] items-center flex">
        <div className="flex justify-between w-[97.5rem] mx-auto">
          <img src={marketer} alt="marketer logo" />
          <img src={visa} alt="visa logo" />
          <img src={forbes} alt="forbes logo" />
          <img src={entrepreneur} alt="entrepreneur logo" />
          <img src={uber} alt="uber logo" />
          <img src={microsoft} alt="microsoft logo" />
          <img src={ripple} alt="ripple logo" />
          <img src={mc} alt="mc logo" />
        </div>
      </section>
    </header>
  );
};

export default Header;
