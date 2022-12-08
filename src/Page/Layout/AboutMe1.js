import Aboutme1Compo from "../../Component/Aboutme1";
import { useEffect, useReducer, useState } from "react";
import useStore from "../Edit/Store/Store";
import ComponentWrapper from "./ComponentWrapper";
import Dog from "../../Asset/Dog.png";
function AboutMe1({ faindex, rerenderfunc }) {
  const addPart = useStore((state) => state.addPart);
  const addUpdate = useStore((state) => state.addforUpload);
  let partArr = useStore((state) => state.PartArr);
  const getArr = [...partArr];
  const PresentArr = useStore((state) => state.arrPresent);
  const deletefunc = useStore((state) => state.deletePart);
  const deleteComp = useStore((state) => state.deletePresent);
  let NewarrAboutme = getArr.filter(
    (item) => item.Fatherindex == faindex && item.FatherComponent == "Aboutme0"
  );
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  let InitValue = [
    {
      id: 1,
      FatherComponent: "Aboutme0",
      Fatherindex: faindex,
      key: "Aboutme1Compo",
      Component: Aboutme1Compo,
      title: "Student at Ton Duc Thang University",
      link: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \nlabore et dolore magna aliqua. Ut enim adminim veniam, \nquis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. \nDuis aute irure dolor inreprehenderit in voluptate velit esse \ncillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, \nsunt inculpa qui officia deserunt mollit anim id est laborum consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
      time: "Sep 2021 - 2077",
      URL: Dog,
    },
  ];
  if (NewarrAboutme.length != 0) {
    InitValue = NewarrAboutme;
  }
  InitValue.forEach((i) => {
    if (!i.hasOwnProperty("Component")) {
      i["Component"] = Aboutme1Compo;
    }
  });
  const [numofAboutme1, setnumofAboutme1] = useState(InitValue);
  useEffect(() => {
    addPart(numofAboutme1);
  }, []);
  const IncreaseElement = () => {
    let idtoadd = numofAboutme1.length + 1;
    let newnumofAboutme1 = [
      ...numofAboutme1,
      {
        id: idtoadd,
        FatherComponent: "Aboutme0",
        Fatherindex: faindex,
        key: "Aboutme1Compo",
        Component: Aboutme1Compo,
        title: "Student at Ton Duc Thang University",
        link: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \nlabore et dolore magna aliqua. Ut enim adminim veniam, \nquis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. \nDuis aute irure dolor inreprehenderit in voluptate velit esse \ncillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, \nsunt inculpa qui officia deserunt mollit anim id est laborum consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
        time: "Sep 2021 - 2077",
        URL: Dog,
      },
    ];
    setnumofAboutme1(newnumofAboutme1);
    addPart(newnumofAboutme1);
    forceUpdate();
  };
  const ChangeTitle = (id, value) => {
    const arrneedtoChange = numofAboutme1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["title"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofAboutme1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofAboutme1(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeLink = (id, value) => {
    const arrneedtoChange = numofAboutme1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["link"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofAboutme1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofAboutme1(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeTime = (id, value) => {
    const arrneedtoChange = numofAboutme1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["time"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofAboutme1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofAboutme1(newArr2);
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
      let numIndxinCompo = numofAboutme1.indexOf(deleteEle);
      numofAboutme1.splice(numIndxinCompo, 1);
      setnumofAboutme1(numofAboutme1);
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
  const changeImage = (id, URL) => {
    const arrneedtoChange = numofAboutme1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["URL"] = URL;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofAboutme1];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofAboutme1(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  return (
    <ComponentWrapper
      className=" w-full pt-[90px] pb-[30px] bg-[url('../Asset/AboutmeBackground1.png')]"
      deleteFunc={deleteComponent}
      increaseStatefunc={IncreaseElement}
      id={faindex}
    >
      {numofAboutme1.map(({ link, title, id, URL, time, Component }, index) => (
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

export default AboutMe1;
