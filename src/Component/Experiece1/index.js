import Section from "../../Page/Layout/Section";
function ExperienceComp1({ increaseStatefunc }) {
  return (
    <Section
      increaseStatefunc={increaseStatefunc}
      className="w-[740px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] text-white"
    >
      <p className="text-[18px]">Cong ty Lua dao</p>
      <p className="mx-[10px] mt-[10px] text-[14px] text-[#aaaaaa]">
        2019 - 2077
      </p>
      <p className="mx-[10px] mt-[10px] text-[14px] leading-[19px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Section>
  );
}

export default ExperienceComp1;
