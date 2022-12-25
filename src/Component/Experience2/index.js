import Section from "../../Page/Layout/Section";
import autosize from "autosize";
import { useRef } from "react";
import { useEffect } from "react";
function ExperienceComp2({
  increaseStatefunc,
  ChangeLinkfunc,
  ChangeTitlefunc,
  id,
  ChangeTimefunc,
  titledes,
  linkdes,
  datedes,
  decreaseStateFunc,
}) {
  const ChangeLink = (e) => {
    ChangeLinkfunc(e.target.id, e.target.value);
  };
  const ChangeTitle = (e) => {
    ChangeTitlefunc(e.target.id, e.target.value);
  };
  const ChangeDate = (e) => {
    ChangeTimefunc(e.target.id, e.target.value);
  };

  const textareaRef = useRef();

  useEffect(() => {
    autosize(textareaRef.current);
  }, [])
  return (
    <Section
      decreaseStateFunc={decreaseStateFunc}
      id={id}
      increaseStatefunc={increaseStatefunc}
      className="w-[740px] min-h-[240px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] flex flex-row items-center"
    >
      <div className="w-[170px] min-h-[200px] pr-2 shrink-0 border-r border-c4 h-full flex flex-col justify-center">
        <textarea
          rows="1"
          ref={textareaRef}
          id={id}
          value={`${titledes}`}
          onChange={ChangeTitle}
          className="text-[30px] outline-0	w-[100%] bg-transparent"
        ></textarea>
        <textarea
          rows="1"
          id={id}
          value={`${datedes}`}
          onChange={ChangeDate}
          className="text-[18px] text-[#aaaaaa] outline-0 w-[100%] bg-transparent"
        ></textarea>
      </div>
      <textarea
        id={id}
        value={`${linkdes}`}
        ref={textareaRef}
        rows="6"
        onChange={ChangeLink}
        className="mx-[10px] mt-[10px] text-[14px] leading-[19px]   outline-0	w-[100%] bg-transparent"
      ></textarea>
    </Section>
  );
}

export default ExperienceComp2;
