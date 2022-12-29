import Sidebar from "./Sidebar";
import Cover from "../../Asset/Cover.png";
import ImageIcon from "../../Asset/ImageIcon.svg";
import Bin from "../../Asset/Bin.svg";
import RoundedIconWrapper from "./RoundedIconWrapper";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import {
  aboutMeContainer,
  ContactContainer,
  CVContainer,
  educationContainer,
  experienceContainer,
  Project,
} from "../../Util/containerlayout";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useStore from "./Store/Store";
import GlobalStyle from "../../Component/GlobalStyle";
function Edit() {
  const sumofArr = [
    ...aboutMeContainer,
    ...ContactContainer,
    ...CVContainer,
    ...educationContainer,
    ...experienceContainer,
    ...Project,
  ];
  let arrPresent = useStore((state) => state.arrPresent);
  let ChangeArrPresent = useStore((state) => state.ChangeArrPresent);
  let ChangePartArr = useStore((state) => state.ChangePartArr);
  let ChangeColor = useStore((state) => state.ChangeColor);

  let returnArr = [];
  const [count, forceUpdate] = useState(0);
  const [, forceUpdate2] = useReducer((x) => x + 1, 0);

  for (let i of arrPresent) {
    returnArr = [
      ...returnArr,
      sumofArr.filter((component) => i === component.key)[0],
    ];
  }

  const addArr = useStore((state) => state.addPresent);
  const getPos = (event) => {
    if (!event.destination) {
      return;
    } else {
      if (arrPresent.length == 0) {
        let index = 0;
        switch (event.source.droppableId) {
          case "aboutMeContainer": {
            addArr(aboutMeContainer[event.source.index].key, index);
            break;
          }
          case "WorkExperienceContainer": {
            addArr(experienceContainer[event.source.index].key, index);
            break;
          }
          case "EducationContainer": {
            addArr(educationContainer[event.source.index].key, index);
            break;
          }
          case "ProjectContainer": {
            addArr(Project[event.source.index].key, index);
            break;
          }
          case "ContactContainer": {
            addArr(ContactContainer[event.source.index].key, index);
            break;
          }
          case "CVContainer": {
            addArr(CVContainer[event.source.index].key, index);
            break;
          }
          default: {
            break;
          }
        }
      } else if (event.destination.droppableId != event.source.droppableId) {
        let index = event.destination.index;
        if (arrPresent[index]) {
          let index1 = index + 1;
          ChangePartArr(index, index1);
          ChangeColor(index, index1);
          if (arrPresent[index].container == event.source.droppableId) {
            window.location.reload();
          }
        }
        switch (event.source.droppableId) {
          case "aboutMeContainer": {
            addArr(aboutMeContainer[event.source.index].key, index);
            break;
          }
          case "WorkExperienceContainer": {
            addArr(experienceContainer[event.source.index].key, index);
            break;
          }
          case "EducationContainer": {
            addArr(educationContainer[event.source.index].key, index);
            break;
          }
          case "ProjectContainer": {
            addArr(Project[event.source.index].key, index);
            break;
          }
          case "ContactContainer": {
            addArr(ContactContainer[event.source.index].key, index);
            break;
          }
          case "CVContainer": {
            addArr(CVContainer[event.source.index].key, index);
            break;
          }
          default: {
            break;
          }
        }
      } else {
        let index1 = event.destination.index;
        let index2 = event.source.index;
        ChangePartArr(index1, index2);
        ChangeArrPresent(index1, index2);
        ChangeColor(index1, index2);
        if (
          returnArr[event.destination.index] == returnArr[event.source.index]
        ) {
          window.location.reload();
        }
      }
    }
  };
  return (
    <DragDropContext onDragEnd={getPos}>
      <div className="w-full min-h-full h-fit bg-[#f1f3f4]">
        <div id="needtotake">
          <Droppable droppableId="Drop_Place">
            {(provided, snapshot) => (
              <div
                className="w-full min-h-full h-fit"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div
                  className="w-full min-h-full h-fit flex flex-col items-center pr-[260px] pt-[50px]"
                  id="ThingsNeedtoChange"
                >
                  <div
                    className="w-[100%] bg-white min-h-full h-fit shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                    id="pdf"
                  >
                    <div className="h-[380px] w-full relative group">
                      <img className="h-full w-full" src={Cover} />
                      <div
                        contentEditable
                        suppressContentEditableWarning={true}
                        className="font-para z-100 text-[85px] text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      >
                        Your title
                      </div>
                    </div>
                    {returnArr !== undefined &&
                      returnArr.length !== 0 &&
                      returnArr.map(({ key, Component, id, image }, index) => {
                        return (
                          <Draggable
                            key={`Com_${index}`}
                            draggableId={`Com_${index}`}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                              >
                                <Component
                                  rerenderprob={count}
                                  rerenderfunc={forceUpdate}
                                  faindex={index}
                                  key={`Com_${index}`}
                                />
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                    {provided.placeholder}
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
        <Sidebar />
      </div>
    </DragDropContext>
  );
}
export default Edit;
