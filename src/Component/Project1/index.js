import Section from "../../Page/Layout/Section";

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

  const onImageChange = (event) => {
    const URLIMAGE = URL.createObjectURL(event.target.files[0]);
    ChangeImagefunc(event.target.getAttribute("idname"), URLIMAGE, fatherindx);
  };
  return (
    <Section
      decreaseStateFunc={decreaseStateFunc}
      id={id}
      increaseStatefunc={increaseStatefunc}
      className="w-[740px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px] text-white flex flex-row justify-center items-center"
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
        <textarea
          ind={index}
          id={keymame}
          idname={id}
          value={`${linkdes}`}
          rows="6"
          onChange={ChangeLink}
          className="mt-[10px] text-[14px] leading-[19px] outline-0	w-[100%] bg-transparent"
        ></textarea>
      </div>
    </Section>
  );
}

export default Project1Com;
