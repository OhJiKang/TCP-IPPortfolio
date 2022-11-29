import Open from "../../Asset/Open.svg";
import { Children, useState } from "react";


function SidebarComponentWrapper({ name, children }) {
    const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full h-min py-1 font-para border-b-[1px] flex flex-row justify-between items-center px-6 border-b-[#DBDBDB]">
        {name}
        <img onClick={() => setOpen(!open)} className="cursor-pointer" src={Open} />
      </div>
      <div className={`h-min overflow-hidden duration-300 transition-all`}>
      {Children.toArray(children).map((e) => {
        return (
            <div className={`w-[240px] ${open ? "h-[180px] my-3" : "h-0 my-0 border-none"} overflow-hidden duration-300 transition-all mx-auto my-3 border-[#DBDBDB] border-[1px] flex flex-col justify-around`}>
                {e}
            </div>
        )
      })}
      </div>
    </div>
  );
}

export default SidebarComponentWrapper;
