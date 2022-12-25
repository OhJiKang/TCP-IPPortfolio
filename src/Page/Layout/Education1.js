import Education1Compo from "../../Component/Education1";
import { useEffect, useReducer, useState } from "react";
import ComponentWrapper from "./ComponentWrapper";
import useStore from "../Edit/Store/Store";
import Section from "./Section";
function Education1({ rerenderfunc, faindex }) {
  const addPart = useStore((state) => state.addPart);
  const addUpdate = useStore((state) => state.addforUpload);
  let partArr = useStore((state) => state.PartArr);
  const getArr = [...partArr];
  const PresentArr = useStore((state) => state.arrPresent);
  const deletefunc = useStore((state) => state.deletePart);
  const deletecolorFunc = useStore((state) => state.deleteColor);
  const deleteComp = useStore((state) => state.deletePresent);
  let NewarrEducation = getArr.filter(
    (item) =>
      item.Fatherindex == faindex && item.FatherComponent == "Education0"
  );
  let job = "";
  if (window.localStorage.getItem("profession")) {
    job = window.localStorage.getItem("profession");
  }
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  let InitValue = [
    {
      id: 1,
      FatherComponent: "Education0",
      Fatherindex: faindex,
      key: "Education1Compo",
      Component: Education1Compo,
      title: "Student at Ton Duc Thang University",
      link: `Bachelor of ${job} `,
      time: "Sep 2021 - 2077",
    },
  ];
  if (NewarrEducation.length != 0) {
    InitValue = NewarrEducation;
  }
  let newInitValue = [];
  InitValue.forEach((i) => {
    if (!i.hasOwnProperty("Component")) {
      let arrCopy = { ...i };
      arrCopy["Component"] = Education1Compo;
      newInitValue.push(arrCopy);
    }
  });
  if (newInitValue.length == 0) {
    newInitValue = InitValue;
  }
  const [numofEducation1, setnumofEducation1] = useState(newInitValue);
  useEffect(() => {
    addPart(numofEducation1);
  }, []);
  const IncreaseElement = () => {
    let idtoadd = numofEducation1.length + 1;
    let newnumofEducation1 = [
      ...numofEducation1,
      {
        id: idtoadd,
        FatherComponent: "Education0",
        Fatherindex: faindex,
        key: "Education1Compo",
        Component: Education1Compo,
        title: "Student at Ton Duc Thang University",
        link: `Bachelor of ${job} `,
        time: "Sep 2021 - 2077",
      },
    ];
    setnumofEducation1(newnumofEducation1);
    addPart(newnumofEducation1);
    forceUpdate();
  };
  const ChangeTitle = (id, value) => {
    const arrneedtoChange = numofEducation1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["title"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofEducation1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofEducation1(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeLink = (id, value) => {
    const arrneedtoChange = numofEducation1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["link"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofEducation1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofEducation1(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeTime = (id, value) => {
    const arrneedtoChange = numofEducation1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["time"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofEducation1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofEducation1(newArr2);
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
      let numIndxinCompo = numofEducation1.indexOf(deleteEle);
      numofEducation1.splice(numIndxinCompo, 1);
      setnumofEducation1(numofEducation1);
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
  return (
    <ComponentWrapper
      deleteFunc={deleteComponent}
      increaseStatefunc={IncreaseElement}
      id={faindex}
      className="w-full py-[60px] bg-c1"
    >
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[240px] h-[40px] border-c4 border-[5px] rounded-[10px] text-ct font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Education & Certification
        </div>
        {numofEducation1.map(({ link, title, id, time, Component }, index) => (
          <Component
            decreaseStateFunc={decreaseStateFunc}
            index={index}
            titledes={title}
            linkdes={link}
            datedes={time}
            ChangeTitlefunc={ChangeTitle}
            ChangeLinkfunc={ChangeLink}
            ChangeTimefunc={ChangeTime}
            id={id}
            increaseStatefunc={IncreaseElement}
            key={`Little_Part_${index}_${id}`}
            keymame={`Little_Part_${faindex}_${id}`}
          />
        ))}
      </div>
    </ComponentWrapper>
  );
}

export default Education1;
