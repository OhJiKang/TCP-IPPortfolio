import create from "zustand";
import produce from "immer";
const useStore = create((set) => ({
  arrPresent: [],
  addPresent: (Componeedtoadd) =>
    set(
      produce((state) => {
        state.arrPresent.push(Componeedtoadd);
      })
    ),
  deletePresent: (index) =>
    set(
      produce((state) => {
        state.arrPresent.splice(index, 1);
      })
    ),
}));

export default useStore;
