import ComponentWrapper from "./ComponentWrapper";
import ImageIcon from "../../Asset/ImageIcon.svg";
import useStore from "../Edit/Store/Store";
import { useEffect, useReducer, useState } from "react";
import CV1Compo from "../../Component/CV1";

function CV1({ faindex, rerenderfunc }) {
  const addPart = useStore((state) => state.addPart);
  const addUpdate = useStore((state) => state.addforUpload);
  let partArr = useStore((state) => state.PartArr);
  const getArr = [...partArr];
  const PresentArr = useStore((state) => state.arrPresent);
  const deletefunc = useStore((state) => state.deletePart);
  const deleteComp = useStore((state) => state.deletePresent);
  const deletecolorFunc = useStore((state) => state.deleteColor);
  let NewarrCV = getArr.filter(
    (item) => item.Fatherindex == faindex && item.FatherComponent == "CV0"
  );
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  let InitValue = [
    {
      id: 1,
      FatherComponent: "CV0",
      Fatherindex: faindex,
      key: "CV1Compo",
      Component: CV1Compo,
      title: "Student at Ton Duc Thang University",
      link: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \nlabore et dolore magna aliqua. Ut enim adminim veniam, \nquis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. \nDuis aute irure dolor inreprehenderit in voluptate velit esse \ncillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, \nsunt inculpa qui officia deserunt mollit anim id est laborum consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
      time: "Sep 2021 - 2077",
      URL: ImageIcon,
    },
  ];
  if (NewarrCV.length != 0) {
    InitValue = NewarrCV;
  }
  let newInitValue = [];
  InitValue.forEach((i) => {
    if (!i.hasOwnProperty("Component")) {
      let arrCopy = { ...i };
      arrCopy["Component"] = CV1Compo;
      newInitValue.push(arrCopy);
    }
  });
  if (newInitValue.length == 0) {
    newInitValue = InitValue;
  }
  const [numofCV1, setnumofCV1] = useState(newInitValue);
  useEffect(() => {
    addPart(numofCV1);
  }, []);
  const IncreaseElement = () => {
    let idtoadd = numofCV1.length + 1;
    let newnumofCV1 = [
      ...numofCV1,
      {
        id: idtoadd,
        FatherComponent: "CV0",
        Fatherindex: faindex,
        key: "CV1Compo",
        Component: CV1Compo,
        title: "Student at Ton Duc Thang University",
        link: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \nlabore et dolore magna aliqua. Ut enim adminim veniam, \nquis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. \nDuis aute irure dolor inreprehenderit in voluptate velit esse \ncillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, \nsunt inculpa qui officia deserunt mollit anim id est laborum consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
        time: "Sep 2021 - 2077",
        URL: ImageIcon,
      },
    ];
    setnumofCV1(newnumofCV1);
    addPart(newnumofCV1);
    forceUpdate();
  };
  const ChangeTitle = (id, value) => {
    const arrneedtoChange = numofCV1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["title"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofCV1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofCV1(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeLink = (id, value) => {
    const arrneedtoChange = numofCV1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["link"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofCV1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofCV1(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeTime = (id, value) => {
    const arrneedtoChange = numofCV1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["time"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofCV1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofCV1(newArr2);
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
      let numIndxinCompo = numofCV1.indexOf(deleteEle);
      numofCV1.splice(numIndxinCompo, 1);
      setnumofCV1(numofCV1);
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
    const arrneedtoChange = numofCV1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["URL"] = URL;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofCV1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofCV1(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  return (
    <ComponentWrapper
      className="w-full py-[60px] bg-c1"
      deleteFunc={deleteComponent}
      increaseStatefunc={IncreaseElement}
      id={faindex}
    >
      {numofCV1.map(({ link, title, id, URL, time, Component }, index) => (
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
      ))}
    </ComponentWrapper>
  );
}

export default CV1;
