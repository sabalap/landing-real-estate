import itConsulting from "../../assets/images/it-consulting.png";
import softwareDevelopment from "../../assets/images/software-development.png";
import tech from "../../assets/images/tech.png";
const SolutionSection = () => {
  return (
    <section className="bg-[#CBE2F9] pb-40">
      <div className="w-[97.5rem] mx-auto pt-40">
        <h3 className="font-bold text-lg mb-4">Benefits</h3>
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-medium">Our solutions:</h2>
          <button className="w-[11.8125rem] font-bold text-black text-base bg-transparent border-2 h-16 border-black rounded-xl">
            Book a Call
          </button>
        </div>
        <div className="mt-[7.5rem] flex">
          <div className="border-[#A2B5C7] w-[32.5rem] border-l pl-[3.75rem] h-[53.0625rem]">
            <h3 className="mb-9 font-medium text-lg text-[#67737F]">01</h3>
            <img src={itConsulting} alt="it consulting" />
            <h1 className="text-[3.5rem] w-[18.875rem] mt-12 mb-6 font-bold leading-[4.75rem]">
              IT Consulting
            </h1>
            <p className="font-medium text-lg text-[#778A9C] w-[25rem] leading-[1.875rem]">
              Measure and report greenhouse gas emissions on a regular basis.
            </p>
          </div>
          <div className="border-[#A2B5C7] w-[32.5rem] border-l pl-[3.75rem] h-[53.0625rem]">
            <h3 className="mb-9 font-medium text-lg text-[#67737F]">02</h3>
            <img src={softwareDevelopment} alt="sofware development" />
            <h1 className="text-[3.5rem] w-[22.6875rem] mt-12 mb-6 font-bold leading-[4.75rem]">
              End-to-end Software Development
            </h1>
            <p className="font-medium text-lg text-[#778A9C] w-[25rem] leading-[1.875rem]">
              Implement decarbonization strategies in line with the Paris
              Agreement through business change and innovations, including
              efficiency improvements, renewable energy, materials reductions,
              and other carbon emission elimination strategies.
            </p>
          </div>
          <div className="border-[#A2B5C7] w-[32.5rem] border-l pl-[3.75rem] h-[53.0625rem]">
            <h3 className="mb-9 font-medium text-lg text-[#67737F]">03</h3>
            <img src={tech} alt="tech" />
            <h1 className="text-[3.5rem] w-[26.4375rem] mt-12 mb-6 font-bold leading-[4.75rem]">
              Immersive Tech Consulting
            </h1>
            <p className="font-medium text-lg text-[#778A9C] w-[25rem] leading-[1.875rem]">
              Neutralize any remaining emissions with additional, quantifiable,
              real, permanent, and socially beneficial offsets to achieve
              net-zero annual carbon emissions by 2040.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
