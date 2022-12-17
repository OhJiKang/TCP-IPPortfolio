import TextIcon from "../../Asset/TextIcon.svg";
import ImageIcon from "../../Asset/ImageIcon.svg";
import BigImageIcon from "../../Asset/BigImageIcon.svg";
import SidebarComponentWrapper from "./SidebarComponentWrapper";
import TextLeft from "../../Asset/TextLeft.svg";
import TextCenter from "../../Asset/TextCenter.svg";
import {
  aboutMeContainer,
  ContactContainer,
  CVContainer,
  educationContainer,
  experienceContainer,
  Project,
} from "../../Util/containerlayout";
import { Draggable, Droppable } from "react-beautiful-dnd";
function Sidebar() {
  return (
    <div className="w-[260px] h-full bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] pt-[64px] fixed right-0 top-0 overflow-y-scroll">
      {/* <div className="w-full h-[106px] flex flex-row justify-around items-center border-b-[1px] border-b-[#DBDBDB]">
        <div className="hover:bg-[#bbbbbb] rounded-lg cursor-pointer w-[80px] h-[68px] py-2 text-center flex justify-center flex-col">
          <img className="m-auto" src={TextIcon} />
          Text box
        </div>
        <div className="hover:bg-[#bbbbbb] rounded-lg cursor-pointer w-[80px] h-[68px] py-2 text-center flex justify-center flex-col">
          <img className="m-auto brightness-0" src={ImageIcon} />
          Image
        </div>
      </div> */}
      <SidebarComponentWrapper name="About me" dropID={"aboutMeContainer"}>
        <div className="Aboutme_container">
          {aboutMeContainer.map((children, index) => {
            return (
              <Draggable
                key={`${children.key}`}
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
      <SidebarComponentWrapper
        name="Work experience"
        dropID={"WorkExperienceContainer"}
      >
        {experienceContainer.map((children, index) => {
          return (
            <Draggable
              key={`${children.key}`}
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
                    alt={`Work_Experience_${index}`}
                  ></img>
                </div>
              )}
            </Draggable>
          );
        })}
      </SidebarComponentWrapper>
      <SidebarComponentWrapper
        name="Education &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Certification"
        dropID={"EducationContainer"}
      >
        <div>
          {educationContainer.map((children, index) => {
            return (
              <Draggable
                key={`${children.key}`}
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
                      alt={`Work_Experience_${index}`}
                    ></img>
                  </div>
                )}
              </Draggable>
            );
          })}
        </div>
      </SidebarComponentWrapper>
      <SidebarComponentWrapper name="Project" dropID={"ProjectContainer"}>
        <div>
          {Project.map((children, index) => {
            return (
              <Draggable
                key={`${children.key}`}
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
                      alt={`Project_${index}`}
                    ></img>
                  </div>
                )}
              </Draggable>
            );
          })}
        </div>
      </SidebarComponentWrapper>
      <SidebarComponentWrapper name="Contact" dropID={"ContactContainer"}>
        <div>
          {ContactContainer.map((children, index) => {
            return (
              <Draggable
                key={`${children.key}`}
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
                      alt={`Project_${index}`}
                    ></img>
                  </div>
                )}
              </Draggable>
            );
          })}
        </div>
      </SidebarComponentWrapper>
      <SidebarComponentWrapper name="CV" dropID={"CVContainer"}>
        <div>
          {CVContainer.map((children, index) => {
            return (
              <Draggable
                key={`${children.key}`}
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
                      alt={`Project_${index}`}
                    ></img>
                  </div>
                )}
              </Draggable>
            );
          })}
        </div>
      </SidebarComponentWrapper>
    </div>
  );
}

export default Sidebar;
