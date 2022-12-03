import NavBarEdit from "./NavBarEdit";
import Edit from "./Edit";
import { DragDropContext } from "react-beautiful-dnd";
import { useCallback, useContext, useState } from "react";
import { aboutMeContainer } from "../../Util/containerlayout";
import { ArrContext } from "./Store";
function PageTest3() {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [arrPresent, setArrPresent] = useContext(ArrContext);
  console.log(arrPresent);
  const getPos = (event) => {
    switch (event.source.droppableId) {
      case "aboutMeContainer": {
        arrPresent.push(aboutMeContainer[event.source.index]);
        setArrPresent(arrPresent);
        forceUpdate();
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
