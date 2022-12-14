import Section from "../../Page/Layout/Section";
import { useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize"

function Project1Com({
  increaseStatefunc,
  ChangeLinkfunc,
  ChangeTitlefunc,
  ChangeImagefunc,
  id,
  image,
  titledes,
  linkdes,
  decreaseStateFunc,
  index,
  keymame,
  fatherindx,
}) {
  const ChangeLink = (e) => {
    ChangeLinkfunc(e.target.getAttribute("idname"), e.target.value, fatherindx);
  };
  const ChangeTitle = (e) => {
    ChangeTitlefunc(
      e.target.getAttribute("idname"),
      e.target.value,
      fatherindx
    );
  };

  const onImageChange = async (event) => {
    const reader = new FileReader();
    // Đọc thông tin tập tin đã được đăng tải
    const getBase64 = (file) => {
      return new Promise(function (resolve) {
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    };
    let URLIMAGE = await getBase64(event.target.files[0]);
    ChangeImagefunc(event.target.getAttribute("idname"), URLIMAGE, fatherindx);
  };

  return (
    <Section
      decreaseStateFunc={decreaseStateFunc}
      id={id}
      increaseStatefunc={increaseStatefunc}
      className="w-[740px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] flex flex-row justify-center items-center"
    >
      <div className="relative w-[200px] h-[140px] border-c4 border-[2px] rounded-[10px] shrink-0 overflow-hidden">
        <label
          htmlFor={keymame}
          className="absolute btn h-[100%] w-[100%]"
        ></label>
        <input
          ind={index}
          id={keymame}
          idname={id}
          type="file"
          onChange={onImageChange}
          className="  invisible absolute filetype z-0	 "
        />
        <img src={image} />
      </div>
      <div className="ml-[20px]">
        <textarea
          rows="1"
          ind={index}
          id={keymame}
          idname={id}
          value={`${titledes}`}
          onChange={ChangeTitle}
          className="text-[18px]  outline-0	w-[100%] bg-transparent"
        ></textarea>
        <TextareaAutosize
          ind={index}
          id={keymame}
          idname={id}
          value={`${linkdes}`}
          minRows="6"
          aria-multiline
          onChange={ChangeLink}
          className="mt-[10px] text-[14px] leading-[19px] outline-0	w-[100%] bg-transparent"
        ></TextareaAutosize>
      </div>
    </Section>
  );
}

export default Project1Com;
