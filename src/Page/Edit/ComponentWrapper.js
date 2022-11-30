import RoundedIconWrapper from "./RoundedIconWrapper";
import Bin from "../../Asset/Bin.svg";
import Pallet from "../../Asset/pallet.svg";

function ComponentWrapper({ children }) {
  return (
    <div className="w-full h-[308px] flex flex-row items-center px-[80px] py-[24px] justify-between relative">
      {children}
      <div className="absolute -left-14 top-1/2 bg-white rounded-t-full rounded-b-full -translate-y-1/2">
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
