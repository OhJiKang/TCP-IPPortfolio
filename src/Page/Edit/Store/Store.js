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
        state.arrPresent.splice(index, 1);
        if (remainPart == undefined) {
          remainPart = [];
        }
        state.PartArr = remainPart;
      })
    ),
  addPart: (parttoadd) =>
    set(
      produce((state) => {
        const newArr = [...parttoadd].flat();
        let tmpArr = [];
        const ArrRemain = [];
        const filterArr = [];
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
        let letarr = [];
        const newArr = [...parttoadd].flat();
        const ArrRemain = [];
        const filterArr = [];
        newArr.map((x) =>
          ArrRemain.filter(
            (a) => a.id == x.id && a.Fatherindex == x.Fatherindex
          ).length > 0
            ? null
            : ArrRemain.push(x)
        );
        state.PartArr = ArrRemain;
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
