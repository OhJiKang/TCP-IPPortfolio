import Section from "../../Page/Layout/Section";
import { ColorContext } from "../../Page/Layout/ComponentWrapper";
import { useContext } from "react";
import autosize from "autosize";
import { useRef } from "react";
import { useEffect } from "react";

function Project2Com({
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

  const fillColor = useContext(ColorContext).c4;

  const textareaRef = useRef();

  useEffect(() => {
    autosize(textareaRef.current);
  }, [])

  return (
    <Section
      decreaseStateFunc={decreaseStateFunc}
      id={id}
      increaseStatefunc={increaseStatefunc}
      className="w-[740px] bg-c3 p-[20px] font-para border-c4 rounded-[40px] border-[2px]"
    >
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
        ref={textareaRef}
        aria-multiline
        onChange={ChangeLink}
        className="mt-[10px] text-[14px] leading-[19px] outline-0	w-[100%] bg-transparent"
      ></textarea>
      <div className="w-full mt-3 cursor-pointer" onClick={() => console.log('click')}>
        <svg
          className="m-auto border-[2px] border-c2 rounded-[10px]"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M6.66666 23.3335C5.74667 23.3335 5 24.0802 5 25.0002V28.3335C5 32.0151 7.98499 35.0001 11.6667 35.0001H28.3333C32.015 35.0001 34.9999 32.0151 34.9999 28.3335V25.0002C34.9999 24.0802 34.2533 23.3335 33.3333 23.3335C32.4133 23.3335 31.6666 24.0802 31.6666 25.0002V28.3335C31.6666 30.1751 30.175 31.6668 28.3333 31.6668H11.6667C9.82499 31.6668 8.33333 30.1751 8.33333 28.3335V25.0002C8.33333 24.0802 7.58666 23.3335 6.66666 23.3335Z"
            fill={fillColor}
          />
          <path
            d="M19.9999 3.3335C19.5632 3.3335 19.1282 3.47684 18.8016 3.80184L9.32324 13.3335L11.6666 15.6768L18.3332 9.06346V26.6668C18.3332 27.5868 19.0799 28.3334 19.9999 28.3334C20.9199 28.3334 21.6666 27.5868 21.6666 26.6668V9.06346L28.3332 15.6768L30.6766 13.3335L21.1982 3.80184C20.8716 3.47684 20.4366 3.3335 19.9999 3.3335Z"
            fill={fillColor}
          />
          <rect x="1" y="1" width="38" height="38" rx="9" stroke-width="2" />
        </svg>
      </div>
    </Section>
  );
}

export default Project2Com;
