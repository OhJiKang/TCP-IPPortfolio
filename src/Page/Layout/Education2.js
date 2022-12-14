import Education2Compo from "../../Component/Education2";
import { useEffect, useReducer, useState } from "react";
import useStore from "../Edit/Store/Store";
import ComponentWrapper from "./ComponentWrapper";
import Section from "./Section";
import TDT from "../../Asset/TDT.png";
function Education2({ rerenderfunc, faindex }) {
  const addPart = useStore((state) => state.addPart);
  const addUpdate = useStore((state) => state.addforUpload);
  let partArr = useStore((state) => state.PartArr);
  if (
    JSON.stringify(partArr) !=
    JSON.stringify(
      JSON.parse(window.localStorage.getItem("EditArr")).state.PartArr
    )
  ) {
    partArr = JSON.parse(window.localStorage.getItem("EditArr")).state.PartArr;
  }
  const getArr = [...partArr];
  const PresentArr = useStore((state) => state.arrPresent);
  const deletefunc = useStore((state) => state.deletePart);
  const deleteComp = useStore((state) => state.deletePresent);
  const deletecolorFunc = useStore((state) => state.deleteColor);
  let NewarrEducation = getArr.filter(
    (item) =>
      item.Fatherindex == faindex && item.FatherComponent == "Education1"
  );
  let job = "";
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  if (window.localStorage.getItem("profession")) {
    job = window.localStorage.getItem("profession");
  }
  let InitValue = [
    {
      id: 1,
      FatherComponent: "Education1",
      Fatherindex: faindex,
      key: "Education2Compo",
      Component: Education2Compo,
      title: "Student at Ton Duc Thang University",
      link: `Bachelor of ${job} `,
      time: "Sep 2021 - 2077",
      URL: "https://raw.githubusercontent.com/OhJiKang/TCP-IPPortfolio/main/src/Asset/TDT.png",
    },
  ];
  if (NewarrEducation.length != 0) {
    InitValue = NewarrEducation;
  }

  let newInitValue = [];
  InitValue.forEach((i) => {
    if (!i.hasOwnProperty("Component")) {
      let arrCopy = { ...i };
      arrCopy["Component"] = Education2Compo;
      newInitValue.push(arrCopy);
    }
  });
  if (newInitValue.length == 0) {
    newInitValue = InitValue;
  }
  const [numofEducation2, setnumofEducation2] = useState(newInitValue);
  useEffect(() => {
    addPart(numofEducation2);
  }, [JSON.stringify(numofEducation2)]);

  const IncreaseElement = () => {
    let idtoadd = numofEducation2.at(-1).id + 1;
    let newnumofEducation2 = [
      ...numofEducation2,
      {
        id: idtoadd,
        FatherComponent: "Education1",
        Fatherindex: faindex,
        key: "Education2Compo",
        Component: Education2Compo,
        title: "Student at Ton Duc Thang University",
        link: `Bachelor of ${job} `,
        time: "Sep 2021 - 2077",
        URL: "https://raw.githubusercontent.com/OhJiKang/TCP-IPPortfolio/main/src/Asset/TDT.png",
      },
    ];
    setnumofEducation2(newnumofEducation2);
    addPart(newnumofEducation2);
    forceUpdate();
  };
  const ChangeTitle = (id, value) => {
    const arrneedtoChange = numofEducation2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["title"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofEducation2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofEducation2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeLink = (id, value) => {
    const arrneedtoChange = numofEducation2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["link"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofEducation2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofEducation2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeTime = (id, value) => {
    const arrneedtoChange = numofEducation2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["time"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofEducation2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofEducation2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const decreaseStateFunc = (fatherIndex, id) => {
    const fatherKey = PresentArr[fatherIndex];
    let checkingArr = partArr.filter(
      (item) =>
        item.Fatherindex == fatherIndex && item.FatherComponent == fatherKey
    );
    if (checkingArr.length > 1) {
      const deleteInx = partArr.findIndex(
        (item) =>
          item.id == id &&
          item.Fatherindex == fatherIndex &&
          item.FatherComponent == fatherKey
      );
      const deleteEle = partArr[deleteInx];
      let numIndxinCompo = numofEducation2.indexOf(deleteEle);
      numofEducation2.splice(numIndxinCompo, 1);
      setnumofEducation2(numofEducation2);
      deletefunc(deleteInx);
    }
    forceUpdate();
  };
  const deleteComponent = (id) => {
    let keyfather = PresentArr[id];
    let ArrtoDel = partArr.filter(
      (item) => item.FatherComponent == keyfather && item.Fatherindex == id
    );
    let ArrRemain;
    if (ArrtoDel.length != 0) {
      ArrRemain = partArr.filter((item) => !ArrtoDel.includes(item));
    } else {
      ArrRemain = partArr;
    }
    deleteComp(id, ArrRemain);
    deletecolorFunc(id);
    rerenderfunc();
  };
  const changeImage = (id, URL) => {
    const arrneedtoChange = numofEducation2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["URL"] = URL;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofEducation2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofEducation2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  return (
    <ComponentWrapper
      className="py-[60px] bg-c1"
      id={faindex}
      deleteFunc={deleteComponent}
      increaseStatefunc={IncreaseElement}
    >
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[240px] h-[40px] border-c4 border-[5px] rounded-[10px] text-ct font-para font-bold text-[18px] text-center bg-c3 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Education & Certification
        </div>
        {numofEducation2.map(
          ({ link, title, id, URL, time, Component }, index) => (
            <Component
              decreaseStateFunc={decreaseStateFunc}
              index={index}
              titledes={title}
              linkdes={link}
              datedes={time}
              image={URL}
              ChangeTitlefunc={ChangeTitle}
              ChangeLinkfunc={ChangeLink}
              ChangeTimefunc={ChangeTime}
              ChangeImagefunc={changeImage}
              id={id}
              increaseStatefunc={IncreaseElement}
              key={`Little_Part_${index}_${id}`}
              keymame={`Little_Part_${faindex}_${id}`}
            />
          )
        )}
      </div>
    </ComponentWrapper>
  );
}

export default Education2;
