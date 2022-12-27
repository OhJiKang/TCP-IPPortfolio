import Section from "../../Page/Layout/Section";
import { ColorContext } from "../../Page/Layout/ComponentWrapper";
import { useContext, useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import UploadIcon from "../../Asset/Upload.svg";
import UploadWhiteIcon from "../../Asset/UploadWhite.svg";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

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

  const [url, setUrl] = useState([]);
  useEffect(() => {
    if (image) {
      setUrl([{ uri: image }]);
    }
  }, [image]);
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

  const fillColor = useContext(ColorContext).ct;

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
      <div>
        {image ? (
          <DocViewer documents={url} pluginRenderers={DocViewerRenderers} />
        ) : (
          <div>
            <div className="relative w-full mt-3 cursor-pointer">
              <label
                htmlFor={keymame + `_`}
                className="absolute btn h-[100%] w-[100%] z-20	"
              ></label>
              <input
                ind={index}
                id={keymame + `_`}
                idname={id}
                type="file"
                onChange={onImageChange}
                className="  invisible absolute filetype z-0	 "
              />
              {fillColor === "black" ? (
                <img
                  className="border-[black] border-[2px] rounded-[10px] m-auto"
                  src={UploadIcon}
                />
              ) : (
                <img
                  className="border-[white] border-[2px] rounded-[10px] m-auto"
                  src={UploadWhiteIcon}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

export default Project2Com;
