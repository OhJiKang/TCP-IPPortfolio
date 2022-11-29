import { useEffect, useMemo, useState } from "react";
import LeftArrow from "../../Asset/LeftArrow.svg";
import RightArrow from "../../Asset/RightArrow.svg";
import BuildName from "./BuildName";
import BuildProfession from "./BuildProfession";
import BuildStyle from "./BuildStyle";

function Build() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    profession: "",
    style: -1,
  });
  const setName = (name) => {
    setData(data => {return { ...data, name: name }});
  };

  const setProfession = (profession) => {
    setData(data => {return { ...data, profession: profession }});
  };

  const setStyle = (style) => {
    setData(data => {return { ...data, style: style }});
  };

  useEffect(() => {
    if (window.localStorage.getItem("step")) {
      let stepLocal = JSON.parse(window.localStorage.getItem("step"));
      setStep(stepLocal);
    }
    if (window.localStorage.getItem("name")) {
      let nameLocal = window.localStorage.getItem("name");
      setName(nameLocal);
    }
    if (window.localStorage.getItem("profession")) {
      let professionLocal = window.localStorage.getItem("profession")
      setProfession(professionLocal);
    }

    if (window.localStorage.getItem("styleid")) {
      let styleLocal = window.localStorage.getItem("styleid");
      setStyle(styleLocal);
    }
    
  }, []);

  const stepDisplay = () => {
    switch (step) {
      case 0:
        return <BuildName setName={setName} name={data.name} />;
      case 1:
        return (
          <BuildProfession
            setProfession={setProfession}
            profession={data.profession}
          />
        );
      case 2:
        return <BuildStyle setStyle={setStyle} style={data.style} />;
    }
  };

  return (
    <div className="w-full h-full bg-[#CDD9C5]">
      <div className="w-[1200px] h-full bg-white m-auto relative">
        {stepDisplay()}

        <div className="footer px-[20px] w-full h-[64px] absolute bottom-0 border-t-2 border-[#DBDBDB] flex items-center flex-row justify-between">
          <button
            disabled={step === 0}
            onClick={() => {
              window.localStorage.setItem("step", step - 1);
              setStep(step - 1);
            }}
            className=" h-[40px] border-[1px] flex justify-center items-center text-[18px] disabled:cursor-default disabled:text-neutral-400 p-3 hover:bg-[#bbbbbb] hover:disabled:bg-white"
          >
            <img className="mr-3" src={LeftArrow} />
            Back
          </button>
          <button
            disabled={step === 2}
            onClick={() => {
              window.localStorage.setItem("step", step + 1);
              setStep(step + 1);
            }}
            className="h-[40px] border-[1px] flex justify-center items-center text-[18px] disabled:cursor-default disabled:text-neutral-400 p-3 hover:bg-[#bbbbbb] hover:disabled:bg-white"
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
