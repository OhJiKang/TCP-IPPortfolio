import NavBarEdit from "./NavBarEdit";
import Edit from "./Edit";
import { DragDropContext } from "react-beautiful-dnd";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  aboutMeContainer,
  ContactContainer,
  CVContainer,
  educationContainer,
  experienceContainer,
  Project,
} from "../../Util/containerlayout";
import useStore from "./Store/Store";
function PageTest3() {
  const arrPresent = useStore((state) => state.arrPresent);
  console.log(arrPresent);
  const addArr = useStore((state) => state.addPresent);
  const getPos = (event) => {
    switch (event.source.droppableId) {
      case "aboutMeContainer": {
        addArr(aboutMeContainer[event.source.index]);
        break;
      }
      case "WorkExperienceContainer": {
        addArr(experienceContainer[event.source.index]);
        break;
      }
      case "EducationContainer": {
        addArr(educationContainer[event.source.index]);
        break;
      }
      case "ProjectContainer": {
        addArr(Project[event.source.index]);
        break;
      }
      case "ContactContainer": {
        addArr(ContactContainer[event.source.index]);
        break;
      }
      case "CVContainer": {
        addArr(CVContainer[event.source.index]);
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={getPos}>
        <NavBarEdit />
        <Edit />
      </DragDropContext>
    </>
  );
}

export default PageTest3;
