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
  return (
    <>
      <NavBarEdit />
      <Edit />
    </>
  );
}

export default PageTest3;
