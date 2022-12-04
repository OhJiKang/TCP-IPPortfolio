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
import { ArrContext } from "./Store";
function PageTest3() {
  const [arrPresent, setArrPresent] = useContext(ArrContext);
  const getPos = (event) => {
    switch (event.source.droppableId) {
      case "aboutMeContainer": {
        arrPresent.push(aboutMeContainer[event.source.index]);
        setArrPresent(arrPresent);
        break;
      }
      case "WorkExperienceContainer": {
        arrPresent.push(experienceContainer[event.source.index]);
        setArrPresent(arrPresent);
        break;
      }
      case "EducationContainer": {
        arrPresent.push(educationContainer[event.source.index]);
        setArrPresent(arrPresent);
        break;
      }
      case "ProjectContainer": {
        arrPresent.push(Project[event.source.index]);
        setArrPresent(arrPresent);
        break;
      }
      case "ContactContainer": {
        arrPresent.push(ContactContainer[event.source.index]);
        setArrPresent(arrPresent);
        break;
      }
      case "CVContainer": {
        arrPresent.push(CVContainer[event.source.index]);
        setArrPresent(arrPresent);
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
