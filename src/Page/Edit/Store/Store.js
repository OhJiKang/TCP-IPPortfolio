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
  deletePresent: (index) =>
    set(
      produce((state) => {
        state.arrPresent.splice(index, 1);
      })
    ),
});
const useStore = create(store);
export default useStore;
