import { useState } from "react";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { useEffect } from "react";

function CV1Compo({
  increaseStatefunc,
  ChangeLinkfunc,
  ChangeTitlefunc,
  ChangeImagefunc,
  ChangeTimefunc,
  id,
  PDF,
  titledes,
  linkdes,
  datedes,
  decreaseStateFunc,
  index,
  keymame,
  fatherindx,
}) {
  const [url, setUrl] = useState([]);
  useEffect(() => {
    if (PDF) {
      setUrl([{ uri: PDF }]);
    }
  }, [PDF]);
  const onChange = async (e) => {
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
    let URLPDF = await getBase64(e.target.files[0]);
    ChangeImagefunc(e.target.getAttribute("idname"), URLPDF, fatherindx);
  };
  return (
    <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
      <div className="absolute w-[100px] h-[40px] border-c4 border-[5px] rounded-[10px] text-ct font-para font-bold text-[18px] text-center bg-c3 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        My CV
      </div>
      <div className="h-[362px] w-[740px] bg-c3 p-[40px] font-para border-c4 rounded-[40px] border-[2px] text-ct flex flex-row items-center">
        <div className="relative w-[280px] h-full border-c4 border-[2px] rounded-[40px] shrink-0 overflow-hidden flex justify-center items-center">
          <div className="absolute top-0 right-0 left-0 bottom-0">
            <label
              htmlFor={keymame}
              className="absolute btn h-[100%] w-[100%]"
            ></label>
            <input
              ind={index}
              id={keymame}
              idname={id}
              type="file"
              accept="application/pdf"
              onChange={onChange}
              className="invisible absolute filetype z-0	 "
            />
            <div>
              {url ? (
                // <div
                //   style={{
                //     top: 0,
                //     left: 0,
                //     right: 0,
                //     bottom: 0,
                //     border: "1px solid rgba(0, 0, 0, 0.3)",
                //     width: "100%",
                //     height: "100%",
                //   }}
                // >
                //   <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                //     <Viewer fileUrl={url} />
                //   </Worker>
                // </div>
                <DocViewer
                  documents={url}
                  pluginRenderers={DocViewerRenderers}
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV1Compo;
