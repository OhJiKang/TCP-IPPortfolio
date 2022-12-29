import { useContext, useReducer } from "react";
import Bin from "../../Asset/Bin.svg";
import BlackBin from "../../Asset/BlackBin.svg";
import WhiteBin from "../../Asset/WhiteBin.svg";
import { ColorContext } from "./ComponentWrapper";
import useStore from "../Edit/Store/Store";
function Section({
  children,
  className,
  increaseStatefunc,
  id,
  decreaseStateFunc,
}) {
  const deleteFunc = (e) => {
    const fatherIndex =
      e.target.offsetParent.offsetParent.offsetParent.offsetParent.id;
    decreaseStateFunc(fatherIndex, id);
  };
  const textColor = useContext(ColorContext).ct;
  return (
    <div className={`${className} relative group/section`}>
      {children}
      <div
        className="absolute -left-[40px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-[40px] h-[80px] bg-c3 border-c4 border-[1px] rounded-[20px] opacity-0 group-hover/section:opacity-100 duration-200 ease-in-out"
        id="needtoDisable"
      >
        <div
          className="h-[40px] cursor-pointer flex justify-center items-center text-ct"
          onClick={increaseStatefunc}
        >
          +
        </div>
        <div
          className="h-[40px] cursor-pointer flex justify-center items-center "
          onClick={deleteFunc}
        >
          {textColor === "black" ? (
            <img src={BlackBin} />
          ) : (
            <img src={WhiteBin} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
