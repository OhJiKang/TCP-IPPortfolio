import Sidebar from "./Sidebar";
import Cover from "../../Asset/Cover.png";
import ImageIcon from "../../Asset/ImageIcon.svg";
import Bin from "../../Asset/Bin.svg";
import RoundedIconWrapper from "./RoundedIconWrapper";
import { useContext, useEffect, useRef, useState } from "react";
import { aboutMeContainer } from "../../Util/containerlayout";
import { Droppable } from "react-beautiful-dnd";
import { ArrContext } from "./Store";
function Edit() {
  const [ArrPresent, setArrPresent] = useContext(ArrContext);
  const canvaRef = useRef();
  const canvaContainerRef = useRef();

  const handleOnWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      let currentScale = parseFloat(
        canvaRef.current.style.transform.match(/\d+\.\d+/)
      );
      if (e.deltaY > 0) {
        if (currentScale > 0.5)
          canvaRef.current.style.transform = `scale(${currentScale - 0.055})`;
      } else if (e.deltaY < 0) {
        if (currentScale < 2)
          canvaRef.current.style.transform = `scale(${currentScale + 0.055})`;
      }
    }
  };

  useEffect(() => {
    canvaContainerRef.current.addEventListener("wheel", handleOnWheel, {
      passive: false,
    });
    canvaRef.current.style.transform = "scale(0.75)";
  }, []);

  return (
    <div className="w-full min-h-full h-fit bg-[#f1f3f4]">
      <Droppable droppableId="Drop_Place">
        {(provided) => (
          <div className="w-full min-h-full h-fit" ref={provided.innerRef} {...provided.droppableProps}>
            <div
              ref={canvaContainerRef}
              className="w-full min-h-full h-fit flex flex-col items-center pr-[260px] pt-[75px]"
            >
              <div
                ref={canvaRef}
                className="w-[1440px] bg-white min-h-full h-fit shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
              >
                <div className="h-[380px] w-full relative group">
                  <img className="h-full w-full" src={Cover} />
                  <div className="font-para z-100 text-[85px] text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    Your title
                  </div>
                  <RoundedIconWrapper className="absolute left-0 bottom-0 m-3 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                    <img src={ImageIcon} />
                  </RoundedIconWrapper>
                  <RoundedIconWrapper className="absolute top-1/2 -left-14 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                    <img src={Bin} />
                  </RoundedIconWrapper>
                </div>
                {ArrPresent.length != 0 &&
                  ArrPresent.map(({ key, component, id, image }, index) => {
                    return <div key={index}> {component()}</div>;
                  })}
                {provided.placeholder}
              </div>
            </div>
          </div>
        )}
      </Droppable>
      <Sidebar />
    </div>
  );
}

export default Edit;
