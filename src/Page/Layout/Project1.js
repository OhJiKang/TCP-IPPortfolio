import { useReducer, useState } from "react";
import Computer from "../../Asset/Computer.png";
import Project1Com from "../../Component/Project1";
import ComponentWrapper from "./ComponentWrapper";
import Section from "./Section";
function Project1({ index }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [numofProject1, setnumofProject1] = useState([Project1Com]);
  const IncreaseElement = () => {
    numofProject1.push(Project1Com);
    setnumofProject1(numofProject1);
    forceUpdate();
  };
  return (
    <ComponentWrapper className="w-full py-[60px] bg-c1" id={index}>
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[100px] h-[40px] border-c4 border-[5px] rounded-[10px] text-white font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Project
        </div>
        {numofProject1.map((Component, index) => (
          <Component
            increaseStatefunc={IncreaseElement}
            key={`Little_Part_${index}`}
          />
        ))}
      </div>
    </ComponentWrapper>
  );
}

export default Project1;
