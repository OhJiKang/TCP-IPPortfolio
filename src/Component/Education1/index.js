import Section from "../../Page/Layout/Section";
import TextareaAutosize from "react-textarea-autosize"
import { useEffect, useRef } from "react";

function Education1Compo({
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

  return (
    <div>
      <Section
        decreaseStateFunc={decreaseStateFunc}
        id={id}
        increaseStatefunc={increaseStatefunc}
        className="w-[740px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px]"
      >
        <textarea
          rows="1"
          id={id}
          value={`${titledes}`}
          onChange={ChangeTitle}
          className="text-[18px]  outline-0	w-[100%] bg-transparent"
        ></textarea>
        <textarea
          rows="1"
          id={id}
          value={`${datedes}`}
          onChange={ChangeDate}
          className=" outline-0	w-[100%] bg-transparent mx-[10px] mt-[10px] text-[18px] text-[#aaaaaa]"
        ></textarea>
        <TextareaAutosize
          id={id}
          value={`${linkdes}`}
          minRows="6"
          onChange={ChangeLink}
          className=" outline-0	w-[100%] bg-transparent mx-[10px] mt-[10px] text-[14px] leading-[19px]"
        ></TextareaAutosize>
      </Section>
    </div>
  );
}

export default Education1Compo;
