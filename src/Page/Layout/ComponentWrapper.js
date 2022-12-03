import RoundedIconWrapper from "../Edit/RoundedIconWrapper";
import Bin from "../../Asset/Bin.svg";
import Pallet from "../../Asset/pallet.svg";

function ComponentWrapper({ children, className }) {
  return (
    <div className={` ${className} relative group`}>
      {children}
      <div className="absolute -left-14 top-1/2 bg-white rounded-t-full rounded-b-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out -translate-y-1/2">
        <RoundedIconWrapper>
          <img src={Bin} />
        </RoundedIconWrapper>
        <RoundedIconWrapper>
          <img src={Pallet} />
        </RoundedIconWrapper>
      </div>
    </div>
  );
}

export default ComponentWrapper;
