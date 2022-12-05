import Section from "../../Page/Layout/Section";
function Contact1Compo({ increaseStatefunc }) {
  return (
    <Section
      increaseStatefunc={increaseStatefunc}
      className="w-[740px] bg-c3 py-[20px] px-[40px] font-para border-c4 rounded-[40px] border-[2px] text-white"
    >
      <p className="text-[18px] font-bold">Facebook</p>
      <a
        className="mt-[10px] text-[14px] leading-[19px] text-[#0084FF] underline"
        href="#"
      >
        facebook.com/abcxyz
      </a>
    </Section>
  );
}

export default Contact1Compo;
