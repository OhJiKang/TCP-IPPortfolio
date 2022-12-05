import { useReducer, useState } from "react";
import Education2_Compo from "../../Component/Education2";

import ComponentWrapper from "./ComponentWrapper";
import Section from "./Section";

function Education2({ index }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [numofEducation2, setnumofEducation2] = useState([Education2_Compo]);
  console.log(numofEducation2);
  const IncreaseElement = () => {
    numofEducation2.push(Education2_Compo);
    setnumofEducation2(numofEducation2);
    console.log(numofEducation2);
    forceUpdate();
  };
  return (
    <ComponentWrapper className="py-[60px] bg-c1" id={index}>
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[240px] h-[40px] border-c4 border-[5px] rounded-[10px] text-white font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Education & Certification
        </div>
        {numofEducation2.map((Component, index) => (
          <Component
            increaseStatefunc={IncreaseElement}
            key={`Little_Part_${index}`}
          />
        ))}
      </div>
    </ComponentWrapper>
  );
}

export default Education2;
