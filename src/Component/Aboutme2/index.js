import { useEffect } from "react";

function Aboutme2Compo({
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

    ChangeImagefunc(event.target.getAttribute("idname"), URLIMAGE);
  };
  return (
    <div className="relative w-[720px] bg-c2 border-c4 border-[5px] rounded-[100px] py-[40px] pl-[109px] m-auto">
      <div className="absolute top-[10%] left-[-14%] border-[5px] rounded-full h-[200px] w-[200px] border-c4 overflow-hidden">
        <div className="relative">
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
      </div>
      <div className="w-[580px] bg-c3 border-c4 border-[2px] rounded-[40px] text-left font-para px-[20px] py-[10px]">
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
          onChange={ChangeLink}
          className="outline-0	w-[100%] bg-transparent text-[14px] leading-[19px]"
        ></textarea>
      </div>
    </div>
  );
}

export default Aboutme2Compo;
