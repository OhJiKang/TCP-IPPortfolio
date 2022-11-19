import { useState } from "react";
import LeftArrow from "../Asset/LeftArrow.svg";
import RightArrow from "../Asset/RightArrow.svg";
import BuildName from "./BuildName";
import BuildProfession from "./BuildProfession";
import BuildStyle from "./BuildStyle";

function Build() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const stepDisplay = () => {
    switch (step) {
      case 0:
        return <BuildName />;
      case 1:
        return <BuildProfession />;
      case 2:
        return <BuildStyle />;
    }
  };

  return (
    <div className="w-full h-full bg-[#CDD9C5]">
      <div className="w-[1200px] h-full bg-white m-auto relative">
        {stepDisplay()}

        <div className="footer px-[20px] w-full h-[64px] absolute bottom-0 border-t-2 border-[#DBDBDB] flex items-center flex-row justify-between">
          <button
            disabled={step == 0}
            onClick={() => {
              setStep(step - 1);
            }}
            className=" h-[40px] border-[1px] flex justify-center items-center text-[18px] disabled:cursor-default disabled:text-neutral-400 p-3 hover:bg-[#CECECE] hover:disabled:bg-white"
          >
            <img className="mr-3" src={LeftArrow} />
            Back
          </button>
          <button
            disabled={step == 2}
            onClick={() => {
              setStep(step + 1);
            }}
            className="h-[40px] border-[1px] flex justify-center items-center text-[18px] disabled:cursor-default disabled:text-neutral-400 p-3 hover:bg-[#CECECE] hover:disabled:bg-white"
          >
            Continue
            <img className="ml-3" src={RightArrow} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Build;
