import Sidebar from "./Sidebar";
import Cover from "../../Asset/Cover.png";
import ImageIcon from "../../Asset/ImageIcon.svg";
import Bin from "../../Asset/Bin.svg";
import RoundedIconWrapper from "./RoundedIconWrapper";
import { useContext, useEffect, useRef, useState } from "react";
import { aboutMeContainer } from "../../Util/containerlayout";
import { Droppable } from "react-beautiful-dnd";
import useStore from "./Store/Store";
function Edit() {
  const arrPresent = useStore((state) => state.arrPresent);
  console.log(arrPresent);
  return (
    <div className="w-full min-h-full h-fit bg-[#f1f3f4]">
      <Droppable droppableId="Drop_Place">
        {(provided) => (
          <div
            className="w-full min-h-full h-fit"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="w-full min-h-full h-fit flex flex-col items-center pr-[260px] pt-[75px]">
              <div className="w-[1440px] bg-white min-h-full h-fit shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
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
                {arrPresent.length !== 0 &&
                  arrPresent.map(({ key, Component, id, image }, index) => {
                    return (
                      <div key={index}>
                        {<Component key={`Com_${index}`} />}
                      </div>
                    );
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
