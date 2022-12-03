import { createContext, useState } from "react";

const DropArr = createContext();
function ArrContext({ children }) {
  const [arrPresent, setArrPresent] = useState([]);
  return (
    <DropArr.Provider value={[arrPresent, setArrPresent]}>
      {children}
    </DropArr.Provider>
  );
}

export { ArrContext, DropArr };
