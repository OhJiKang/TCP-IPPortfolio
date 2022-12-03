import Open from "../../Asset/Open.svg";
import { Children, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
function SidebarComponentWrapper({ name, children, dropID }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full h-min py-1 font-para border-b-[1px] flex flex-row justify-between items-center px-6 border-b-[#DBDBDB]">
        {name}
        <img
          onClick={() => setOpen(!open)}
          className="cursor-pointer"
          src={Open}
        />
      </div>
      <div className={`h-min overflow-hidden duration-300 transition-all`}>
        {Children.toArray(children).map((e, index) => {
          return (
            <Droppable droppableId={`${dropID}`} key={index}>
              {(provided) => (
                <div
                  className={`w-[240px] ${
                    open
                      ? "my-3 h-fit max-h-[400px]"
                      : "max-h-0 h-0 my-0 border-none"
                  } overflow-hidden duration-500 transition-all mx-auto my-3 flex flex-col justify-around`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {e}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </div>
  );
}

export default SidebarComponentWrapper;
