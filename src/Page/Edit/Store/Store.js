import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import produce from "immer";
import reactElementToJSXString from "react-element-to-jsx-string";
import { isValidElement } from "react";
import ReactDOMServer from "react-dom/server";
let store = (set) => ({
  arrPresent: [],
  addPresent: (Componeedtoadd) =>
    set(
      produce((state) => {
        state.arrPresent = [...state.arrPresent, Componeedtoadd];
      })
    ),
  PartArr: [],
  deletePresent: (index, remainPart) =>
    set(
      produce((state) => {
        if (remainPart == undefined) {
          remainPart = [];
        }
        let k = [];
        if (index < state.arrPresent.length - 1) {
          remainPart.forEach((element) => {
            if (element.Fatherindex > index) {
              let arrCopy = { ...element };
              arrCopy["Fatherindex"] = arrCopy["Fatherindex"] - 1;
              element = arrCopy;
            }
            k.push(element);
          });
        }
        state.arrPresent.splice(index, 1);
        state.PartArr = k;
      })
    ),
  addPart: (parttoadd) =>
    set(
      produce((state) => {
        const newArr = [...parttoadd].flat();
        let tmpArr = [];
        const ArrRemain = [];
        const filterArr = [];
        console.log(newArr);
        newArr.map((x) =>
          ArrRemain.filter(
            (a) => a.id == x.id && a.Fatherindex == x.Fatherindex
          ).length > 0
            ? null
            : ArrRemain.push(x)
        );
        tmpArr = [...ArrRemain, ...state.PartArr];
        tmpArr.map((x) =>
          filterArr.filter(
            (a) => a.id == x.id && a.Fatherindex == x.Fatherindex
          ).length > 0
            ? null
            : filterArr.push(x)
        );
        state.PartArr = filterArr;
      })
    ),
  addforUpload: (parttoadd) =>
    set(
      produce((state) => {
        const newArr = [...parttoadd, ...state.PartArr].flat();
        const filterArr = [];
        newArr.map((x) =>
          filterArr.filter(
            (a) => a.id == x.id && a.Fatherindex == x.Fatherindex
          ).length > 0
            ? null
            : filterArr.push(x)
        );
        state.PartArr = filterArr;
      })
    ),
  deletePart: (index) =>
    set(
      produce((state) => {
        state.PartArr.splice(index, 1);
      })
    ),
});
store = persist(store, { name: "EditArr" });
const useStore = create(store);
export default useStore;
