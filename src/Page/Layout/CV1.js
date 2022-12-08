import ComponentWrapper from "./ComponentWrapper";
import ImageIcon from "../../Asset/ImageIcon.svg";

function CV1({ index }) {
  return (
    <ComponentWrapper className="w-full py-[60px] bg-c1" id={index}>
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[100px] h-[40px] border-c4 border-[5px] rounded-[10px] text-ct font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          My CV
        </div>
        <div className="h-[362px] w-[740px] bg-c3 p-[40px] font-para border-c4 rounded-[40px] border-[2px] text-ct flex flex-row items-center">
          <div className="w-[280px] h-full border-c4 border-[2px] rounded-[40px] shrink-0 overflow-hidden flex justify-center items-center">
            <img className="w-[120px] h-[120px] opacity-40" src={ImageIcon} />
          </div>
          <div className="ml-[20px] h-full font-para">
            <p>More detail</p>
            <a href="#" className="underline text-[#0085FF]">
              myCV.pdf
            </a>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default CV1;
