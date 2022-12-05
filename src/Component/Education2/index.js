import Section from "../../Page/Layout/Section";
import TDT from "../../Asset/TDT.png";
function Education2_Compo({ increaseStatefunc }) {
  return (
    <div>
      <Section
        increaseStatefunc={increaseStatefunc}
        className="w-[740px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] text-white flex flex-row justify-center items-center"
      >
        <div className="w-[200px] h-[140px] border-c4 border-[2px] rounded-[10px] shrink-0 overflow-hidden">
          <img src={TDT} />
        </div>
        <div className="ml-[20px]">
          <p className="text-[18px] h-[20px]">
            Student at Ton Duc Thang University
          </p>
          <p className="mt-[10px] text-[14px] h-[20px] text-[#aaaaaa]">
            Sep 2021 - 2077
          </p>
          <p className="mt-[10px] text-[14px] leading-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </Section>
    </div>
  );
}

export default Education2_Compo;
