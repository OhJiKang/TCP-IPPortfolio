import Style1 from "../Asset/Style1.png";
import Style2 from "../Asset/Style2.png";
import Style3 from "../Asset/Style3.png";
import Style4 from "../Asset/Style4.png";
import Style5 from "../Asset/Style5.png";
import Style6 from "../Asset/Style6.png";

function BuildStyle() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[480px] text-center font-heading font-[600] text-[40px] absolute top-28">
        WHAT IS YOUR STYLE ?
      </div>
      <div className="grid grid-cols-3 gap-[20px]">
        <img className="cursor-pointer" src={Style1} />
        <img className="cursor-pointer" src={Style2} />
        <img className="cursor-pointer" src={Style3} />
        <img className="cursor-pointer" src={Style4} />
        <img className="cursor-pointer" src={Style5} />
        <img className="cursor-pointer" src={Style6} />
      </div>
    </div>
  );
}

export default BuildStyle;
