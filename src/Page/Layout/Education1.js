import ComponentWrapper from "./ComponentWrapper";
import Section from "./Section";

function Education1() {
  return (
    <ComponentWrapper className="w-full py-[60px] bg-cover bg-[url('../Asset/EducationBackground1.png')]">
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[240px] h-[40px] border-c4 border-[5px] rounded-[10px] text-white font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Education & Certification
        </div>
        <Section className="w-[740px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] text-white">
          <p className="text-[18px]">Student at Ton Duc Thang University</p>
          <p className="mx-[10px] mt-[10px] text-[14px] text-[#aaaaaa]">
            Sep 2021 - 2077
          </p>
          <p className="mx-[10px] mt-[10px] text-[14px] leading-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </Section>
        <Section className="w-[740px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] text-white">
          <p className="text-[18px]">Student at Ton Duc Thang University</p>
          <p className="mx-[10px] mt-[10px] text-[14px] text-[#aaaaaa]">
            Sep 2021 - 2077
          </p>
          <p className="mx-[10px] mt-[10px] text-[14px] leading-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </Section>
      </div>
    </ComponentWrapper>
  );
}

export default Education1;
