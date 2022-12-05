import RoundedIconWrapper from "../Edit/RoundedIconWrapper";
import Bin from "../../Asset/Bin.svg";
import Pallet from "../../Asset/pallet.svg";
import { useCallback, useContext, useRef, useState } from "react";
import useStore from "../Edit/Store/Store";
function ComponentWrapper({ children, className, id }) {
  const refchild = useRef(null);
  const deletefunc = useStore((state) => state.deletePresent);
  const deleteComponent = () => {
    let id = refchild.current.offsetParent.id;
    deletefunc(id);
  };
  return (
    <div className={` ${className} relative group`} id={id}>
      {children}
      <div className="absolute bottom-0 z-10 left-1/2 bg-white flex flex-row rounded-t-full rounded-b-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out -translate-x-1/2 translate-y-1/2">
        <RoundedIconWrapper onClickfunc={deleteComponent}>
          <img src={Bin} ref={refchild} />
        </RoundedIconWrapper>
        <RoundedIconWrapper>
          <img src={Pallet} />
        </RoundedIconWrapper>
      </div>
    </div>
  );
}

export default ComponentWrapper;
