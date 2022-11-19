import ArchitectImg from "../Asset/Architect.png";
import ArtistImg from "../Asset/Artist.png";
import DesignerImg from "../Asset/Designer.png";
import MakeupArtistImg from "../Asset/MakeupArtist.png";
import ModelImg from "../Asset/Model.png";
import MusicianImg from "../Asset/Musician.png";
import PhotographerImg from "../Asset/Photographer.png";
import ProgrammerImg from "../Asset/Programmer.png";
import RetoucherImg from "../Asset/Retoucher.png";
import StoreImg from "../Asset/Store.png";
import StudentImg from "../Asset/Student.png";
import OtherImg from "../Asset/Other.png";
import { useRef } from "react";

function ProfessionBox({ name, img }) {
    const label = useRef(0);

    const handleMouseOver = (e) => {
        label.current.classList.add('invisible', 'opacity-0');
      };
    
      const handleMouseOut = (e) => {
        label.current.classList.remove('invisible', 'opacity-0');
      }
    return (
        <div className="relative w-[180px] h-[180px] group cursor-pointer">
            <img className="group-hover:brightness-75" src={img}/>    
            <div ref={label} className="h-[40px] group-hover:opacity-100 opacity-0 transition-opacity ease-in-out bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex justify-center items-center p-3 rounded-[10px]">
                {name}
            </div>
        </div>
    )
}

function BuildProfession() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[480px] text-center font-heading font-[600] text-[40px] absolute top-28">WHAT IS YOUR PROFESSION ?</div>
      <div className="grid grid-cols-6 gap-[20px]">
        <ProfessionBox img={ArchitectImg} name="Architect"/>
        <ProfessionBox img={ArtistImg} name="Artist"/>
        <ProfessionBox img={DesignerImg} name="Designer"/>
        <ProfessionBox img={MakeupArtistImg} name="Makeup"/>
        <ProfessionBox img={ModelImg} name="Model"/>
        <ProfessionBox img={MusicianImg} name="Musician"/>
        <ProfessionBox img={PhotographerImg} name="Photographer"/>
        <ProfessionBox img={ProgrammerImg} name="Programmer"/>
        <ProfessionBox img={RetoucherImg} name="Retoucher"/>
        <ProfessionBox img={StoreImg} name="Store"/>
        <ProfessionBox img={StudentImg} name="Student"/>
        <ProfessionBox img={OtherImg} name="Other"/>
      </div>
    </div>
  );
}

export default BuildProfession;
