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
  const onImageChange = (event) => {
    const URLIMAGE = URL.createObjectURL(event.target.files[0]);
    ChangeImagefunc(event.target.getAttribute("idname"), URLIMAGE, fatherindx);
  };
  return (
    <div className="relative w-[720px] bg-c2 border-c4 border-[5px] rounded-[100px] py-[40px] pl-[109px]">
      <div className="absolute top-1/2 left-0 border-[5px] rounded-full h-[200px] w-[200px] border-c4 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
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
          <img src={image} alt="preview image" />
        </div>
      </div>
      <div className="w-[580px] text-white bg-c3 border-c4 border-[2px] rounded-[40px] text-left font-para px-[20px] py-[10px]">
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