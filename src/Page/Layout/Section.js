import { useContext, useReducer } from "react";
import { ReactComponent as Bin} from "../../Asset/Bin.svg";
import { TextColorContext } from "./ComponentWrapper";
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
  const textColor = useContext(TextColorContext);
  return (
    <div className={`${className} relative group/section`}>
      {children}
      <div className="absolute -left-[40px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-[40px] h-[80px] bg-c3 border-c4 border-[1px] rounded-[20px] opacity-0 group-hover/section:opacity-100 duration-200 ease-in-out">
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
          <Bin stroke={textColor}/>
        </div>
      </div>
    </div>
  );
}

export default Section;
