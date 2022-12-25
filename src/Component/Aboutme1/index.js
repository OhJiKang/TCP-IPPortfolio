import { useEffect, useRef } from "react";
import autosize from "autosize";

function Aboutme1Compo({
  increaseStatefunc,
  ChangeLinkfunc,
  ChangeTitlefunc,
  ChangeImagefunc,
  ChangeTimefunc,
  id,
  image,
  titledes,
  linkdes,
  datedes,
  decreaseStateFunc,
  index,
  keymame,
  fatherindx,
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

  const textareaRef = useRef();

  useEffect(() => {
    autosize(textareaRef.current);
  }, [])

  return (
    <div className="relative mx-auto w-[740px] bg-c2 border-c4 border-[5px] rounded-[100px] pt-[70px]">
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 border-[5px] rounded-full h-[140px] w-[140px] border-c4 overflow-hidden">
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
          className=" invisible absolute filetype z-0	 "
        />
        <img src={image} alt="preview" />
      </div>
      <div className="w-[600px] m-auto bg-c3 border-c4 border-[2px] rounded-[40px] text-center font-para pt-[10px] pl-[20px]">
        <textarea
          rows="1"
          id={id}
          value={`${titledes}`}
          onChange={ChangeTitle}
          className=" outline-0	w-[100%] bg-transparent text-[18px]"
        ></textarea>
        <textarea
          rows="6"
          id={id}
          value={`${linkdes}`}
          ref={textareaRef}
          onChange={ChangeLink}
          className="outline-0	w-[100%] bg-transparent text-[14px] leading-[19px]"
        ></textarea>
      </div>
    </div>
  );
}

export default Aboutme1Compo;
