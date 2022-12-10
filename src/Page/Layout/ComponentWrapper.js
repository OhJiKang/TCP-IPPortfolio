import RoundedIconWrapper from "../Edit/RoundedIconWrapper";
import Bin from "../../Asset/Bin.svg";
import Pallet from "../../Asset/pallet.svg";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import useStore from "../Edit/Store/Store";
import ColorPalette from "./ColorPalette";
function ComponentWrapper({ children, className, id, deleteFunc }) {
  const styles = [
    { c1: "#404258", c2: "#474e68", c3: "#50577a", c4: "#6b728e", ct:"white"},
    { c1: "#395144", c2: "#4e6c50", c3: "#f0ebce", c4: "#aa8b56", ct:"black" },
    { c1: "#def5e5", c2: "#bcead5", c3: "#9ed5c5", c4: "#8ec3b0", ct:"black" },
    { c1: "#e1ffb1", c2: "#c7f2a4", c3: "#fcffb2", c4: "#9a9d12", ct:"black" },
    { c1: "#06283d", c2: "#256d85", c3: "#dff6ff", c4: "#47b5ff", ct:"black" },
    { c1: "#f0ff42", c2: "#82cd47", c3: "#379237", c4: "#58b636", ct:"white" },
  ];
  const [style, setStyle] = useState(styles[0])
  const componentRef = useRef();
  const changeColorRef = useRef();
  const deleteComponent = (e) => {
    // deleteFunc
    let id = e.target.offsetParent.offsetParent.id;
    deleteFunc(id);
  };


  const openModal = () => {
    changeColorRef.current.classList.toggle("hidden");
    changeColorRef.current.classList.toggle("flex");
    changeColorRef.current.classList.add(
      "animate-[fade_0.2s_ease-in-out_forwards]"
    );
  };

  const closeModal = (e) => {
    changeColorRef.current.classList.toggle("hidden");
    changeColorRef.current.classList.toggle("flex");
  };


  const stylesDisplay = [
    { c1: "bg-[#404258]", c2: "bg-[#474e68]", c3: "bg-[#50577a]", c4: "bg-[#6b728e]", ct:"white"},
    { c1: "bg-[#395144]", c2: "bg-[#4e6c50]", c3: "bg-[#f0ebce]", c4: "bg-[#aa8b56]", ct:"black" },
    { c1: "bg-[#def5e5]", c2: "bg-[#bcead5]", c3: "bg-[#9ed5c5]", c4: "bg-[#8ec3b0]", ct:"black" },
    { c1: "bg-[#e1ffb1]", c2: "bg-[#c7f2a4]", c3: "bg-[#fcffb2]", c4: "bg-[#9a9d12]", ct:"black" },
    { c1: "bg-[#06283d]", c2: "bg-[#256d85]", c3: "bg-[#dff6ff]", c4: "bg-[#47b5ff]", ct:"black" },
    { c1: "bg-[#f0ff42]", c2: "bg-[#82cd47]", c3: "bg-[#379237]", c4: "bg-[#58b636]", ct:"white" },
  ];

  const setColor = () => {
    componentRef.current.style.setProperty("--c1", style.c1);
    componentRef.current.style.setProperty("--c2", style.c2);
    componentRef.current.style.setProperty("--c3", style.c3);
    componentRef.current.style.setProperty("--c4", style.c4);
    componentRef.current.style.setProperty("--ct", style.ct);
  };

  useEffect(() => {
    setColor();
  }, [style])

  return (
    <div
      ref={componentRef}
      className={` ${className} component-wrapper relative group text-ct`}
      id={id}
    >
      <TextColorContext.Provider value={style.ct}>
      {children}
      </TextColorContext.Provider>
      <div className="absolute bottom-0 z-10 left-1/2 bg-white flex flex-row rounded-t-full rounded-b-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out -translate-x-1/2 translate-y-1/2">
        <RoundedIconWrapper onClickfunc={deleteComponent}>
          <img src={Bin}/>
        </RoundedIconWrapper>
        <RoundedIconWrapper onClickfunc={openModal}>
          <img src={Pallet} />
        </RoundedIconWrapper>
      </div>
      <div
        ref={changeColorRef}
        className="fixed hidden z-10 w-full h-full top-0 left-0 justify-center items-center"
      >
        <div className="w-[800px] h-[400px] z-50 bg-white opacity-100 rounded-3xl text-black font-para grid grid-cols-2 grid-rows-3 gap-8 p-8">
          {styles.map((elem, id) => 
            <ColorPalette onClick={() => setStyle(styles[id])} style={stylesDisplay[id]} />
          )}
        </div>
        <div
          onClick={closeModal}
          className="w-full h-full absolute bg-slate-700 opacity-30"
        ></div>
      </div>
    </div>
  );
}

export default ComponentWrapper;
export const TextColorContext = createContext()
