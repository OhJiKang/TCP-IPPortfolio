import Computer from "../../Asset/Computer.png";

function Project1() {
  return (
    <div className="w-[900px] h-[540px] rounded-[40px] pt-[60px] bg-c1">
      <div className="relative w-[820px] h-[440px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col justify-between items-center py-[35px]">
        <div className="absolute w-[100px] h-[40px] border-c4 border-[5px] rounded-[10px] text-white font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Project
        </div>
        <div className="w-[740px] h-[170px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] text-white flex flex-row justify-center items-center">
          <div className="w-[200px] h-[140px] border-c4 border-[2px] rounded-[10px] shrink-0 overflow-hidden">
            <img src={Computer} />
          </div>
          <div className="ml-[20px]">
            <p className="text-[18px] h-[20px]">This is my computer</p>
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
        <div className="w-[740px] h-[170px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] text-white flex flex-row justify-center items-center">
          <div className="w-[200px] h-[140px] border-c4 border-[2px] rounded-[10px] shrink-0 overflow-hidden">
            <img src={Computer} />
          </div>
          <div className="ml-[20px]">
            <p className="text-[18px] h-[20px]">This is my computer</p>
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

export default Project1;