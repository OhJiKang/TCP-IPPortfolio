import { useEffect, useReducer, useState } from "react";
import useStore from "../Edit/Store/Store";
import ExperienceComp2 from "../../Component/Experience2";
import ComponentWrapper from "./ComponentWrapper";
function Experience2({ rerenderfunc, faindex }) {
  const addPart = useStore((state) => state.addPart);
  const addUpdate = useStore((state) => state.addforUpload);
  let partArr = useStore((state) => state.PartArr);
  const getArr = [...partArr];
  const PresentArr = useStore((state) => state.arrPresent);
  const deletefunc = useStore((state) => state.deletePart);
  const deletecolorFunc = useStore((state) => state.deleteColor);
  const deleteComp = useStore((state) => state.deletePresent);
  let NewarrExperience = getArr.filter(
    (item) =>
      item.Fatherindex == faindex && item.FatherComponent == "experience1"
  );
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  let InitValue = [
    {
      id: 1,
      FatherComponent: "experience1",
      Fatherindex: faindex,
      key: "ExperienceComp2",
      Component: ExperienceComp2,
      title: "My Experienced",
      link: "I'm experienced at ReactJS for 2 years. Also I'm keen on learning new things everyday",
      time: "Sep 2021 - 2077",
    },
  ];
  if (NewarrExperience.length != 0) {
    InitValue = NewarrExperience;
  }
  let newInitValue = [];
  InitValue.forEach((i) => {
    if (!i.hasOwnProperty("Component")) {
      let arrCopy = { ...i };
      arrCopy["Component"] = ExperienceComp2;
      newInitValue.push(arrCopy);
    }
  });
  if (newInitValue.length == 0) {
    newInitValue = InitValue;
  }
  const [numofExperience2, setnumofExperience2] = useState(newInitValue);
  useEffect(() => {
    addPart(numofExperience2);
  }, []);
  const IncreaseElement = () => {
    let idtoadd = numofExperience2.length + 1;
    let newnumofExperience2 = [
      ...numofExperience2,
      {
        id: idtoadd,
        FatherComponent: "experience1",
        Fatherindex: faindex,
        key: "ExperienceComp2",
        Component: ExperienceComp2,
        title: "My Experienced",
        link: "I'm experienced at ReactJS for 2 years. Also I'm keen on learning new things everyday",
        time: "Sep 2021 - 2077",
      },
    ];
    setnumofExperience2(newnumofExperience2);
    addPart(newnumofExperience2);
    forceUpdate();
  };
  const ChangeTitle = (id, value) => {
    const arrneedtoChange = numofExperience2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["title"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofExperience2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofExperience2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeLink = (id, value) => {
    const arrneedtoChange = numofExperience2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["link"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofExperience2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofExperience2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeTime = (id, value) => {
    const arrneedtoChange = numofExperience2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["time"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofExperience2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofExperience2(newArr2);
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
      let numIndxinCompo = numofExperience2.indexOf(deleteEle);
      numofExperience2.splice(numIndxinCompo, 1);
      setnumofExperience2(numofExperience2);
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
    rerenderfunc();
  };
  return (
    <ComponentWrapper
      className="w-full py-[60px] bg-c1"
      deleteFunc={deleteComponent}
      increaseStatefunc={IncreaseElement}
      id={faindex}
    >
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[120px] h-[40px] border-c4 border-[5px] rounded-[10px] text-ct font-para font-bold text-[18px] text-center bg-c3 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Experience
        </div>
        {numofExperience2.map(({ link, title, id, time, Component }, index) => (
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

export default Experience2;
