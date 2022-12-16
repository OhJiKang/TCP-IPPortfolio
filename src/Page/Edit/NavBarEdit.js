import Logo from "../../Asset/Logo.svg";
import Redo from "../../Asset/Redo.svg";
import Undo from "../../Asset/Undo.svg";
import Save from "../../Asset/Save.svg";
import RoundedIconWrapper from "./RoundedIconWrapper";
import * as ReactDOMServer from "react-dom/server";
import ReactDOM from "react-dom";
import PageTest3 from ".";
import { useEffect } from "react";
import Edit from "./Edit";
function NavBarEdit() {
  console.log(Edit());
  const DownloadHTML = () => {
    const k = ReactDOMServer.renderToStaticMarkup(<Edit />);
    const element = document.createElement("a");
    const file = new Blob([k], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="font-para text-[18px] w-full h-[64px] justify-between fixed bg-white border-b-[1px] border-b-[#D8DADB] flex flex-row items-center p-[12px] z-10">
      <div className="flex flex-row items-center">
        <img className="logo ml-7" src={Logo}></img>
        <div className="ml-5">Untitled project</div>
      </div>
      <div className="flex flex-row items-center">
        <RoundedIconWrapper className="m-2">
          <img src={Undo} />
        </RoundedIconWrapper>
        <RoundedIconWrapper className="m-2">
          <img src={Redo} />
        </RoundedIconWrapper>
        <div
          className="m-4 hover:bg-[#bbbbbb] px-2 rounded-lg cursor-pointer "
          onClick={DownloadHTML}
        >
          Save
          <img className="inline m-2" src={Save} />
        </div>
        <div className="m-4">Phu Le</div>
      </div>
    </div>
  );
}

export default NavBarEdit;
