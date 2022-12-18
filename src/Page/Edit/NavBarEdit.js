import Logo from "../../Asset/Logo.svg";
import Redo from "../../Asset/Redo.svg";
import Undo from "../../Asset/Undo.svg";
import Save from "../../Asset/Save.svg";
import RoundedIconWrapper from "./RoundedIconWrapper";
import { jsPDF } from "jspdf";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import html2canvas from "html2canvas";
import * as ReactDOMServer from "react-dom/server";
import ReactDOM from "react-dom";
import PageTest3 from ".";
import { useEffect } from "react";
import Edit from "./Edit";
function NavBarEdit() {
  const takingCSS = () => {
    var css = [];

    for (var sheeti = 0; sheeti < document.styleSheets.length; sheeti++) {
      var sheet = document.styleSheets[sheeti];
      var rules = "cssRules" in sheet ? sheet.cssRules : sheet.rules;
      for (var rulei = 0; rulei < rules.length; rulei++) {
        var rule = rules[rulei];
        if ("cssText" in rule) css.push(`<style>` + rule.cssText + `</style>`);
        else
          css.push(rule.selectorText + " {\n" + rule.style.cssText + "\n}\n");
      }
    }
    return css.join("\n");
  };
  const DownloadHTML = () => {
    const CSSSelect = takingCSS();
    const ClassneedtoDisable = document.querySelectorAll("#needtoDisable");
    ClassneedtoDisable.forEach((element, index) => {
      element.classList.add("invisible");
    });
    const ClassneedtoChange = document.querySelector("#ThingsNeedtoChange");
    ClassneedtoChange.classList.remove("pr-[260px]");
    ClassneedtoChange.classList.remove("pt-[50px]");
    const k = document.querySelector("#needtotake").outerHTML;
    ClassneedtoChange.classList.add("pr-[260px]");
    ClassneedtoChange.classList.add("pt-[50px]");
    console.log(k);
    ClassneedtoDisable.forEach((element, index) => {
      element.classList.remove("invisible");
    });
    const htmls = `<!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="theme-color" content="#000000">
      <meta name="description" content="Web site created using create-react-app">
    <title>Tiêu đề trang web</title>
    </head>
    <style>
    ${CSSSelect}
    </style

    <body>
    ${k}
    </body>
    </html>`;
    const element = document.createElement("a");
    const file = new Blob([htmls], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    console.log(file);
    element.download = "myFile.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", ["1440", "3000"]);

    const data = await html2canvas(document.querySelector("#pdf"), {
      onClone: (clonedDocument) => {
        console.log(clonedDocument);
        Array.from(clonedDocument.querySelectorAll("textarea")).forEach(
          (textArea) => {
            console.log(textArea);
            const div = clonedDocument.createElement("div");
            div.innerText = textArea.value;
            div.style.border = "1px solid #9b9b9b";
            div.style.padding = "0 10px";
            textArea.style.display = "none";
            textArea.parentElement.append(div);
          }
        );
      },
    });
    const img = data.toDataURL("image/png", 1.0);
    console.log(img);
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("shipping_label.pdf");
  };
  return (
    <div className="font-para text-[18px] w-full h-[64px] justify-between fixed bg-white border-b-[1px] border-b-[#D8DADB] flex flex-row items-center p-[12px] z-10">
      <div className="flex flex-row items-center">
        <img className="logo ml-7" src={Logo}></img>
        <div className="ml-5">Untitled project</div>
      </div>
      <div className="flex flex-row items-center">
        <RoundedIconWrapper className="m-2">
          <img src={Undo} />
        </RoundedIconWrapper>
        <RoundedIconWrapper className="m-2">
          <img src={Redo} />
        </RoundedIconWrapper>
        <div
          className="m-4 hover:bg-[#bbbbbb] px-2 rounded-lg cursor-pointer "
          onClick={DownloadHTML}
        >
          Save
          <img className="inline m-2" src={Save} />
        </div>
        <div className="m-4">Phu Le</div>
      </div>
    </div>
  );
}

export default NavBarEdit;
