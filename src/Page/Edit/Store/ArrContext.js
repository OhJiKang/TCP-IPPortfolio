import { createContext, useReducer, useState } from "react";
import Context from "./Context";
function ArrContext({ children }) {
  const [arrPresent, setArrPresent] = useState([]);
  return (
    <Context.Provider value={[arrPresent, setArrPresent]}>
      {children}
    </Context.Provider>
  );
}

export { ArrContext };
