import { useReducer, useState } from "react";
import Education1Compo from "../../Component/Education1";
import ComponentWrapper from "./ComponentWrapper";
import Section from "./Section";
function Education1({ index }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [numofElement, setNumofElement] = useState([
    Education1Compo,
    Education1Compo,
  ]);
  const IncreaseElement = () => {
    numofElement.push(Education1Compo);
    setNumofElement(numofElement);
    forceUpdate();
  };
  return (
    <ComponentWrapper
      className="w-full py-[60px] bg-cover bg-[url('../Asset/EducationBackground1.png')]"
      id={index}
    >
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[240px] h-[40px] border-c4 border-[5px] rounded-[10px] text-white font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Education & Certification
        </div>
        {numofElement.map((Component, index) => (
          <Component
            increaseStatefunc={IncreaseElement}
            key={`Little_Part_${index}`}
          />
        ))}
      </div>
    </ComponentWrapper>
  );
}

export default Education1;
