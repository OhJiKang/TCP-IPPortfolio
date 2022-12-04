import { createContext, useCallback, useReducer, useState } from "react";
import Context from "./Context";
function ArrContext({ children }) {
  const [arrPresent, changeArrPresent] = useState([]);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const setArrPresent = () => {
    changeArrPresent(arrPresent);
    forceUpdate();
  };
  return (
    <Context.Provider value={[arrPresent, setArrPresent]}>
      {children}
    </Context.Provider>
  );
}

export { ArrContext };
