import TDT from "../../Asset/TDT.png";

function Education2() {
  return (
    <div className="h-[600px] pt-[60px] bg-c1">
      <div className="relative w-[820px] h-[500px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col justify-between items-center py-[35px]">
        <div className="absolute w-[240px] h-[40px] border-c4 border-[5px] rounded-[10px] text-white font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Education & Certification
        </div>
        <div className="w-[740px] h-[200px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] text-white flex flex-row justify-center items-center">
          <div className="w-[200px] h-[140px] border-c4 border-[2px] rounded-[10px] shrink-0 overflow-hidden">
            <img src={TDT} />
          </div>
          <div className="ml-[20px]">
            <p className="text-[18px] h-[20px]">
              Student at Ton Duc Thang University
            </p>
            <p className="mt-[10px] text-[14px] h-[20px] text-[#aaaaaa]">
              Sep 2021 - 2077
            </p>
            <p className="mt-[10px] text-[14px] leading-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="w-[740px] h-[200px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] text-white flex flex-row justify-center items-center">
          <div className="w-[200px] h-[140px] border-c4 border-[2px] rounded-[10px] shrink-0 overflow-hidden">
            <img src={TDT} />
          </div>
          <div className="ml-[20px]">
            <p className="text-[18px] h-[20px]">
              Student at Ton Duc Thang University
            </p>
            <p className="mt-[10px] text-[14px] h-[20px] text-[#aaaaaa]">
              Sep 2021 - 2077
            </p>
            <p className="mt-[10px] text-[14px] leading-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education2;
