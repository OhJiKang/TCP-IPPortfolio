import { useState } from "react";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
function CV1Compo({
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
  const [url, setUrl] = useState("");
  const onChange = (e) => {
    const files = e.target.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  };

  return (
    <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
      <div className="absolute w-[100px] h-[40px] border-c4 border-[5px] rounded-[10px] text-white font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        My CV
      </div>
      <div className="h-[362px] w-[740px] bg-c3 p-[40px] font-para border-c4 rounded-[40px] border-[2px] text-white flex flex-row items-center">
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
                <div
                  style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                    <Viewer fileUrl={url} />
                  </Worker>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className="ml-[20px] h-full font-para">
          <p>More detail</p>
          <a href={url} className="underline text-[#0085FF]">
            myCV.pdf
          </a>
        </div>
      </div>
    </div>
  );
}

export default CV1Compo;
