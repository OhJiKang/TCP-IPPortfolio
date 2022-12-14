import ComponentWrapper from "./ComponentWrapper";
import useStore from "../Edit/Store/Store";
import { useEffect, useReducer, useState } from "react";
import Aboutme2Compo from "../../Component/Aboutme2";

function AboutMe2({ faindex, rerenderfunc }) {
  let name = "";
  if (window.localStorage.getItem("name")) {
    name = window.localStorage.getItem("name");
  }
  let job = "";
  if (window.localStorage.getItem("profession")) {
    job = window.localStorage.getItem("profession");
  }
  const deletecolorFunc = useStore((state) => state.deleteColor);
  const addPart = useStore((state) => state.addPart);
  const addUpdate = useStore((state) => state.addforUpload);
  let partArr = useStore((state) => state.PartArr);
  const getArr = [...partArr];
  const PresentArr = useStore((state) => state.arrPresent);
  const deletefunc = useStore((state) => state.deletePart);
  const deleteComp = useStore((state) => state.deletePresent);
  let NewarrAboutme = getArr.filter(
    (item) => item.Fatherindex == faindex && item.FatherComponent == "AboutMe1"
  );
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  let InitValue = [
    {
      id: 1,
      FatherComponent: "AboutMe1",
      Fatherindex: faindex,
      key: "Aboutme2Compo",
      Component: Aboutme2Compo,
      title: `Hi my name is ${name}`,
      link: `I live in Vietnam. I work as a ${job}, and I don't have much time for hobbies these days. I would like to apply for the position of ${job} at your company.`,
      time: "Sep 2021 - 2077",
      URL: "https://raw.githubusercontent.com/OhJiKang/TCP-IPPortfolio/main/src/Asset/Dog.png",
    },
  ];
  let newInitValue = [];
  InitValue.forEach((i) => {
    if (!i.hasOwnProperty("Component")) {
      let arrCopy = { ...i };
      arrCopy["Component"] = Aboutme2Compo;
      newInitValue.push(arrCopy);
    }
  });
  if (newInitValue.length == 0) {
    newInitValue = InitValue;
  }
  const [numofAboutme2, setnumofAboutme2] = useState(newInitValue);
  useEffect(() => {
    addPart(numofAboutme2);
  }, []);
  const IncreaseElement = () => {
    let idtoadd = numofAboutme2.length + 1;
    let newnumofAboutme2 = [
      ...numofAboutme2,
      {
        id: idtoadd,
        FatherComponent: "AboutMe1",
        Fatherindex: faindex,
        key: "Aboutme2Compo",
        Component: Aboutme2Compo,
        title: `Hi my name is ${name}`,
        link: `I live in Vietnam. I work as a ${job}, and I don't have much time for hobbies these days. I would like to apply for the position of ${job} at your company.`,
        time: "Sep 2021 - 2077",
        URL: "https://raw.githubusercontent.com/OhJiKang/TCP-IPPortfolio/main/src/Asset/Dog.png",
      },
    ];
    setnumofAboutme2(newnumofAboutme2);
    addPart(newnumofAboutme2);
    forceUpdate();
  };
  const ChangeTitle = (id, value) => {
    const arrneedtoChange = numofAboutme2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["title"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofAboutme2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofAboutme2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeLink = (id, value) => {
    const arrneedtoChange = numofAboutme2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["link"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofAboutme2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofAboutme2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeTime = (id, value) => {
    const arrneedtoChange = numofAboutme2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["time"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofAboutme2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofAboutme2(newArr2);
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
      let numIndxinCompo = numofAboutme2.indexOf(deleteEle);
      numofAboutme2.splice(numIndxinCompo, 1);
      setnumofAboutme2(numofAboutme2);
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
    console.log(URL);
    const arrneedtoChange = numofAboutme2.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["URL"] = URL;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofAboutme2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofAboutme2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  return (
    <ComponentWrapper
      className=" w-full pt-[90px] pb-[30px] bg-c1 bg-cover"
      deleteFunc={deleteComponent}
      increaseStatefunc={IncreaseElement}
      id={faindex}
    >
      {numofAboutme2.map(({ link, title, id, URL, time, Component }, index) => (
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

export default AboutMe2;
