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
  deletePresent: (index) =>
    set(
      produce((state, remainPart) => {
        state.arrPresent.splice(index, 1);
        state.PartArr = remainPart;
      })
    ),
  addPart: (parttoadd) =>
    set(
      produce((state) => {
        const newArr = [...state.PartArr, ...parttoadd].flat();
        console.log(newArr);
        const ArrRemain = [];
        newArr.map((x) =>
          ArrRemain.filter(
            (a) => a.id == x.id && a.Fatherindex == x.Fatherindex
          ).length > 0
            ? null
            : ArrRemain.push(x)
        );

        state.PartArr = [...ArrRemain];
      })
    ),
});
store = persist(store, { name: "EditArr" });
const useStore = create(store);
export default useStore;
