import ComponentWrapper from "./ComponentWrapper";
import Section from "./Section";

function Contact() {
  return (
    <ComponentWrapper className="w-full py-[60px] bg-c1">
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[100px] h-[40px] border-c4 border-[5px] rounded-[10px] text-white font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Contact
        </div>
        <Section className="w-[740px] bg-c3 py-[20px] px-[40px] font-para border-c4 rounded-[40px] border-[2px] text-white">
          <p className="text-[18px] font-bold">Facebook</p>
          <a className="mt-[10px] text-[14px] leading-[19px] text-[#0084FF] underline" href="#">
            facebook.com/abcxyz
          </a>
        </Section>
        <Section className="w-[740px] bg-c3 py-[20px] px-[40px] font-para border-c4 rounded-[40px] border-[2px] text-white">
          <p className="text-[18px] font-bold">Facebook</p>
          <a className="mt-[10px] text-[14px] leading-[19px] text-[#0084FF] underline" href="#">
            facebook.com/abcxyz
          </a>
        </Section>
        <Section className="w-[740px] bg-c3 py-[20px] px-[40px] font-para border-c4 rounded-[40px] border-[2px] text-white">
          <p className="text-[18px] font-bold">Facebook</p>
          <a className="mt-[10px] text-[14px] leading-[19px] text-[#0084FF] underline" href="#">
            facebook.com/abcxyz
          </a>
        </Section>
      </div>
    </ComponentWrapper>
  );
}

export default Contact;
