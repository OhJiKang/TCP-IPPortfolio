import Sidebar from "./Sidebar";
import Cover from "../../Asset/Cover.png";
import ImageIcon from "../../Asset/ImageIcon.svg";
import Bin from "../../Asset/Bin.svg";
import ComponentWrapper from "./ComponentWrapper";
import ImageBox from "./ImageBox";
import TextBox from "./TextBox";
import RoundedIconWrapper from "./RoundedIconWrapper";

function Edit() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-full h-full bg-[#f1f3f4] mr-[260px] pt-[75px]">
        <div className="w-[1200px] bg-white h-full m-auto shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
          <div className="h-[380px] w-full relative">
            <img className="h-full w-full" src={Cover} />
            <div className="font-para z-100 text-[85px] text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              Your title
            </div>
            <RoundedIconWrapper className="absolute left-0 bottom-0 m-3">
              <img src={ImageIcon}/>
            </RoundedIconWrapper>
            <RoundedIconWrapper className="absolute top-1/2 -left-14 -translate-y-1/2">
              <img src={Bin}/>
            </RoundedIconWrapper>
          </div>
          <ComponentWrapper>
            <ImageBox />
            <div>
              <TextBox />
              <TextBox />
            </div>
          </ComponentWrapper>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Edit;
