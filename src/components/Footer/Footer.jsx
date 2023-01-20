import facebook from "../../assets/images/icon-facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import footerLogo from "../../assets/images/footer-logo.png";
const Footer = () => {
  return (
    <footer className="bg-black pt-20">
      <div className="w-[97.5rem] mx-auto">
        <div className="flex pb-[5.4375rem]">
          <div>
            <h2 className="mb-6 font-bold text-white text-4xl">
              Connect on social
            </h2>
            <div className="flex gap-3">
              <div className="flex justify-center items-center w-10 h-10 bg-[#333333] rounded-[1.6875rem]">
                <img src={facebook} alt="" />
              </div>
              <div className="flex justify-center items-center w-10 h-10 bg-[#333333] rounded-[1.6875rem]">
                <img src={instagram} alt="" />
              </div>
              <div className="flex justify-center items-center w-10 h-10 bg-[#333333] rounded-[1.6875rem]">
                <img src={linkedin} alt="" />
              </div>
            </div>
          </div>
          <div className="ml-[8.25rem]">
            <h3 className="text-xl font-medium text-white mb-8 mt-[0.375rem]">
              Navigation
            </h3>
            <ul>
              <li className="w-[4.75rem] border-b-2 border-[#00C1CC] font-bold text-lg text-white mb-7">
                Partners
              </li>
              <li className="w-[4.625rem] border-b-2 border-[#00C1CC] font-bold text-lg text-white mb-7">
                Benefits
              </li>
              <li className="w-[5.3rem] border-b-2 border-[#00C1CC] font-bold text-lg text-white mb-7">
                Solutions
              </li>
              <li className="w-[6rem] border-b-2 border-[#00C1CC] font-bold text-lg text-white">
                How to use
              </li>
            </ul>
          </div>
          <div className="ml-[5.5rem]">
            <h3 className="text-xl font-medium text-white mb-8 mt-[0.375rem]">
              Contact
            </h3>
            <ul>
              <li className="w-[11.6875rem] border-b-2 border-[#00C1CC] font-bold text-lg text-white mb-7">
                Innovation Street # 7
              </li>
              <li className="w-[9.3125rem] border-b-2 border-[#00C1CC] font-bold text-lg text-white mb-7">
                +995 571 990 229
              </li>
              <li className="w-[13.125rem] border-b-2 border-[#00C1CC] font-bold text-lg text-white mb-7">
                marketing@arttteo.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center h-[6.875rem]">
          <img className="img" src={footerLogo} alt="" />
          <h3 className="font-medium text-base text-[#787B79]">
            © Arttteo 2022. All Rights Reserved
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
