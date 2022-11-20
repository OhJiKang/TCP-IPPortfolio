import ArchitectImg from "../../Asset/Architect.png";
import ArtistImg from "../../Asset/Artist.png";
import DesignerImg from "../../Asset/Designer.png";
import MakeupArtistImg from "../../Asset/MakeupArtist.png";
import ModelImg from "../../Asset/Model.png";
import MusicianImg from "../../Asset/Musician.png";
import PhotographerImg from "../../Asset/Photographer.png";
import ProgrammerImg from "../../Asset/Programmer.png";
import RetoucherImg from "../../Asset/Retoucher.png";
import StoreImg from "../../Asset/Store.png";
import StudentImg from "../../Asset/Student.png";
import OtherImg from "../../Asset/Other.png";
import { useRef, useState } from "react";
import ProfessionBox from "./ProfessionBox";

function BuildProfession({ profession, setProfession }) {
  const data = [
    {
      name: "Architect",
      img: ArchitectImg,
    },
    {
      name: "Artist",
      img: ArtistImg,
    },
    {
      name: "Designer",
      img: DesignerImg,
    },
    {
      name: "Makeup",
      img: MakeupArtistImg,
    },
    {
      name: "Model",
      img: ModelImg,
    },
    {
      name: "Musician",
      img: MusicianImg,
    },
    {
      name: "Photographer",
      img: PhotographerImg,
    },
    {
      name: "Programmer",
      img: ProgrammerImg,
    },
    {
      name: "Retoucher",
      img: RetoucherImg,
    },
    {
      name: "Store",
      img: StoreImg,
    },
    {
      name: "Student",
      img: StudentImg,
    },
    {
      name: "Other",
      img: OtherImg,
    },
  ];

  const handleClick = (e) => {
    setProfession(e.currentTarget.lastChild.innerHTML);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[480px] text-center font-heading font-[600] text-[40px] absolute top-28">
        WHAT IS YOUR PROFESSION ?
      </div>
      <div className="grid grid-cols-6 gap-[20px]">
        {data.map((e, idx) => (
          <ProfessionBox
            key={idx}
            chosen={e.name === profession}
            name={e.name}
            img={e.img}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default BuildProfession;
