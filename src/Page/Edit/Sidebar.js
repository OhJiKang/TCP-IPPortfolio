import TextIcon from "../../Asset/TextIcon.svg";
import ImageIcon from "../../Asset/ImageIcon.svg";
import BigImageIcon from "../../Asset/BigImageIcon.svg";
import SidebarComponentWrapper from "./SidebarComponentWrapper";
import TextLeft from "../../Asset/TextLeft.svg";
import TextCenter from "../../Asset/TextCenter.svg";
import { aboutMeContainer } from "../../Util/containerlayout";
import { Draggable, Droppable } from "react-beautiful-dnd";

function Sidebar() {
  return (
    <div className="w-[260px] h-full bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] pt-[64px] fixed right-0 overflow-y-scroll">
      <div className="w-full h-[106px] flex flex-row justify-around items-center border-b-[1px] border-b-[#DBDBDB]">
        <div className="hover:bg-[#bbbbbb] rounded-lg cursor-pointer w-[80px] h-[68px] py-2 text-center flex justify-center flex-col">
          <img className="m-auto" src={TextIcon} />
          Text box
        </div>
        <div className="hover:bg-[#bbbbbb] rounded-lg cursor-pointer w-[80px] h-[68px] py-2 text-center flex justify-center flex-col">
          <img className="m-auto brightness-0" src={ImageIcon} />
          Image
        </div>
      </div>
      <SidebarComponentWrapper
        name="Education &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Certification"
        dropID={aboutMeContainer.id}
      >
        <div className="Aboutme_container">
          {aboutMeContainer.map((children, index) => {
            return (
              <Draggable
                key={`${children.id}`}
                draggableId={`${children.id}`}
                index={index}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                  >
                    <img
                      className="mb-2"
                      src={children.image}
                      alt={`About_me_${index}`}
                    ></img>
                  </div>
                )}
              </Draggable>
            );
          })}
        </div>
      </SidebarComponentWrapper>
      <SidebarComponentWrapper name="Work experience">
        <div>
          <img className="ml-10" src={TextLeft} />
          <img className="ml-10" src={TextLeft} />
        </div>
      </SidebarComponentWrapper>
      <SidebarComponentWrapper name="Project">
        <div>
          <div>
            <div className="flex flex-row justify-center">
              <img src={BigImageIcon} />
              <img src={TextLeft} />
            </div>
            <div className="flex flex-row justify-center">
              <img src={BigImageIcon} />
              <img src={TextLeft} />
            </div>
          </div>
        </div>
      </SidebarComponentWrapper>
      <SidebarComponentWrapper name="CV">
        <div className="flex justify-around">
          <img className="w-[200px] h-[160px]" src={BigImageIcon} />
        </div>
        <div className="flex justify-around">
          <img className="w-[200px] h-[160px]" src={TextLeft} />
        </div>
      </SidebarComponentWrapper>
      <SidebarComponentWrapper name="Contact">
        <div className="flex justify-around">
          <img className="w-[200px] h-[160px]" src={TextLeft} />
        </div>
      </SidebarComponentWrapper>
      <SidebarComponentWrapper name="About me">
        <div className="flex flex-col items-center">
          <div className="w-[60px] h-[60px] rounded-full border-[#DBDBDB] border-[1px] flex justify-center items-center">
            <img className="w-[40px] h-[40px]" src={ImageIcon} />
          </div>
          <img className="" src={TextCenter} />
        </div>
        <div className="flex flex-row justify-around px-4 items-center">
          <div className="w-[60px] h-[60px] rounded-full border-[#DBDBDB] border-[1px] flex justify-center items-center">
            <img className="w-[40px] h-[40px]" src={ImageIcon} />
          </div>
          <img className="" src={TextLeft} />
        </div>
      </SidebarComponentWrapper>
    </div>
  );
}

export default Sidebar;
