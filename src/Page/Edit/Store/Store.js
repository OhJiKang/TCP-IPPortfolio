import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import produce from "immer";
import reactElementToJSXString from "react-element-to-jsx-string";
import { isValidElement } from "react";
import ReactDOMServer from "react-dom/server";
let store = (set, get) => ({
  arrPresent: [],
  addPresent: (Componeedtoadd, index) =>
    set(
      produce((state) => {
        state.arrPresent.splice(index, 0, Componeedtoadd);
      })
    ),
  PartArr: [],
  ChangeArrPresent: (index1, index2) =>
    set(
      produce((state) => {
        [state.arrPresent[index1], state.arrPresent[index2]] = [
          state.arrPresent[index2],
          state.arrPresent[index1],
        ];
      })
    ),
  ChangePartArr: (index1, index2) =>
    set(
      produce((state) => {
        const ArrChange = JSON.parse(JSON.stringify(state.PartArr));
        const allIndexe1 = ArrChange.map((e, i) =>
          e.Fatherindex === index1 ? i : -1
        ).filter((index) => index !== -1);
        const allIndexe2 = ArrChange.map((e, i) =>
          e.Fatherindex === index2 ? i : -1
        ).filter((index) => index !== -1);
        if (allIndexe1.length != 0) {
          allIndexe1.forEach((element) => {
            let arrCopy = { ...ArrChange[element] };
            arrCopy["Fatherindex"] = index2;
            ArrChange[element] = arrCopy;
          });
        }
        if (allIndexe2.length != 0) {
          allIndexe2.forEach((element) => {
            let arrCopy = { ...ArrChange[element] };
            arrCopy["Fatherindex"] = index1;
            ArrChange[element] = arrCopy;
          });
        }
        state.PartArr = [...ArrChange];
      })
    ),
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
        const newArr = [...parttoadd, ...state.PartArr];
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
  colorArr: [],
  setColorArr: (colortoadd) =>
    set(
      produce((state) => {
        const newArr = [colortoadd, ...state.colorArr];
        const filterArr = [];
        newArr.map((x) =>
          filterArr.filter((a) => a.idfa == x.idfa).length > 0
            ? null
            : filterArr.push(x)
        );
        state.colorArr = filterArr;
      })
    ),
  deleteColor: (index) =>
    set(
      produce((state) => {
        state.colorArr.splice(index, 1);
      })
    ),
  ChangeColor: (index1, index2) =>
    set(
      produce((state) => {
        const ArrChange = JSON.parse(JSON.stringify(state.colorArr));
        const allIndexe1 = ArrChange.map((e, i) =>
          e.idfa === index1 ? i : -1
        ).filter((index) => index !== -1);
        const allIndexe2 = ArrChange.map((e, i) =>
          e.idfa === index2 ? i : -1
        ).filter((index) => index !== -1);

        allIndexe1.forEach((element) => {
          let arrCopy = { ...ArrChange[element] };
          arrCopy["idfa"] = index2;
          ArrChange[element] = arrCopy;
        });

        allIndexe2.forEach((element) => {
          let arrCopy = { ...ArrChange[element] };
          arrCopy["idfa"] = index1;
          ArrChange[element] = arrCopy;
        });

        state.colorArr = [...ArrChange];
      })
    ),
});
store = persist(store, { name: "EditArr" });
const useStore = create(store);
export default useStore;
