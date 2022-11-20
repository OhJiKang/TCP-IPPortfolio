import Style1 from "../../Asset/Style1.png";
import Style2 from "../../Asset/Style2.png";
import Style3 from "../../Asset/Style3.png";
import Style4 from "../../Asset/Style4.png";
import Style5 from "../../Asset/Style5.png";
import Style6 from "../../Asset/Style6.png";

function BuildStyle() {
  const styleList = [Style1, Style2, Style3, Style4, Style5, Style6]

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[480px] text-center font-heading font-[600] text-[40px] absolute top-28">
        WHAT IS YOUR STYLE ?
      </div>
      <div className="grid grid-cols-3 gap-[20px]">
        {styleList.map((e, idx) => 
          <img src={e} className="cursor-pointer hover:brightness-75"/>
        )}
      </div>
    </div>
  );
}

export default BuildStyle;
