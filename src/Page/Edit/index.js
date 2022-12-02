import NavBarEdit from "./NavBarEdit";
import Edit from "./Edit";
import { DragDropContext } from "react-beautiful-dnd";

function PageTest3() {
  return (
    <>
      <DragDropContext>
        <NavBarEdit />
        <Edit />
      </DragDropContext>
    </>
  );
}

export default PageTest3;
