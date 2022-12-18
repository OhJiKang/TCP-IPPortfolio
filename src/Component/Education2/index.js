import Section from "../../Page/Layout/Section";
import TDT from "../../Asset/TDT.png";
import { useState } from "react";
function Education2_Compo({
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

  return (
    <div>
      <Section
        decreaseStateFunc={decreaseStateFunc}
        id={id}
        increaseStatefunc={increaseStatefunc}
        className="w-[740px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] flex flex-row justify-center items-center"
      >
        <div className=" relative w-[200px] h-[140px] border-c4 border-[2px] rounded-[10px] shrink-0 overflow-hidden">
          <div>
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
            <img src={image} alt="preview" />
          </div>
        </div>
        <div className="ml-[20px]">
          <textarea
            rows="1"
            className="text-[18px]  outline-0	w-[100%] bg-transparent"
            id={id}
            value={`${titledes}`}
            onChange={ChangeTitle}
          ></textarea>
          <textarea
            rows="1"
            id={id}
            value={`${datedes}`}
            className=" outline-0	w-[100%] bg-transparent mx-[10px] mt-[10px] text-[18px] text-[#aaaaaa]"
            onChange={ChangeDate}
          ></textarea>
          <textarea
            id={id}
            value={`${linkdes}`}
            rows="6"
            onChange={ChangeLink}
            className=" outline-0	w-[100%] bg-transparent mx-[10px] mt-[10px] text-[14px] leading-[19px]"
          ></textarea>
        </div>
      </Section>
    </div>
  );
}

export default Education2_Compo;
