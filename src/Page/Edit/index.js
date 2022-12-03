import NavBarEdit from "./NavBarEdit";
import Edit from "./Edit";
import { DragDropContext } from "react-beautiful-dnd";
import { DropArr } from "./ArrContext";
import { useContext } from "react";
import { aboutMeContainer } from "../../Util/containerlayout";
function PageTest3() {
  const arrDisplay = useContext(DropArr);
  const getPos = (event) => {
    console.log(event);
    switch (event.source.droppableId) {
      case "aboutMeContainer": {
        arrDisplay[0].push(aboutMeContainer[event.source.index]);
        console.log(arrDisplay[0]);
        arrDisplay[1](arrDisplay[0]);
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
