import { useReducer, useState } from "react";
import ExperienceComp1 from "../../Component/Experiece1";
import ComponentWrapper from "./ComponentWrapper";
import Section from "./Section";
function Experience1({ index }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [numofExperience1, setnumofExperience1] = useState([ExperienceComp1]);
  console.log(numofExperience1);
  const IncreaseElement = () => {
    numofExperience1.push(ExperienceComp1);
    setnumofExperience1(numofExperience1);
    console.log(numofExperience1);
    forceUpdate();
  };
  return (
    <ComponentWrapper className="w-full py-[60px] bg-c1" id={index}>
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[120px] h-[40px] border-c4 border-[5px] rounded-[10px] text-white font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Experience
        </div>
        {numofExperience1.map((Component, index) => (
          <Component
            increaseStatefunc={IncreaseElement}
            key={`Little_Part_${index}`}
          />
        ))}
      </div>
    </ComponentWrapper>
  );
}

export default Experience1;
