import { useEffect, useReducer, useState } from "react";
import useStore from "../Edit/Store/Store";
import Project2Com from "../../Component/Project2";
import ComponentWrapper from "./ComponentWrapper";
import Section from "./Section";
function Project2({ rerenderfunc, faindex }) {
  const addPart = useStore((state) => state.addPart);
  const addUpdate = useStore((state) => state.addforUpload);
  let partArr = useStore((state) => state.PartArr);
  const getArr = [...partArr];
  const PresentArr = useStore((state) => state.arrPresent);
  const deletefunc = useStore((state) => state.deletePart);
  const deleteComp = useStore((state) => state.deletePresent);
  const deletecolorFunc = useStore((state) => state.deleteColor);
  let NewarrProject = getArr.filter(
    (item) => item.Fatherindex == faindex && item.FatherComponent == "Project0"
  );
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  let InitValue = [
    {
      id: 1,
      FatherComponent: "Project1",
      Fatherindex: faindex,
      key: "Project2Com",
      Component: Project2Com,
      title: "This is my computer",
      link: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \nlabore et dolore magna aliqua. Ut enim adminim veniam, \nquis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. \nDuis aute irure dolor inreprehenderit in voluptate velit esse \ncillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, \nsunt inculpa qui officia deserunt mollit anim id est laborum consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
      URL: "https://raw.githubusercontent.com/OhJiKang/TCP-IPPortfolio/main/src/Asset/Computer.png",
    },
  ];
  if (NewarrProject.length != 0) {
    InitValue = NewarrProject;
  }
  InitValue.forEach((i) => {
    if (!i.hasOwnProperty("Component")) {
      i["Component"] = Project2Com;
    }
  });
  const [numofProject2, setnumofProject2] = useState(InitValue);
  useEffect(() => {
    addPart(numofProject2);
  }, []);
  const IncreaseElement = () => {
    let idtoadd = numofProject2.length + 1;
    let newnumofProject2 = [
      ...numofProject2,
      {
        id: idtoadd,
        FatherComponent: "Project1",
        Fatherindex: faindex,
        key: "Project2Com",
        Component: Project2Com,
        title: "This is my computer",
        link: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \nlabore et dolore magna aliqua. Ut enim adminim veniam, \nquis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. \nDuis aute irure dolor inreprehenderit in voluptate velit esse \ncillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, \nsunt inculpa qui officia deserunt mollit anim id est laborum consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
        URL: "https://raw.githubusercontent.com/OhJiKang/TCP-IPPortfolio/main/src/Asset/Computer.png",
      },
    ];
    setnumofProject2(newnumofProject2);
    addPart(newnumofProject2);
    forceUpdate();
  };
  const ChangeTitle = (id, value, index) => {
    const arrneedtoChange = numofProject2.find(
      (item) =>
        id == item.id &&
        index == item.Fatherindex &&
        item.FatherComponent == "Project1"
    );
    let arrCopy = { ...arrneedtoChange };
    arrCopy["title"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofProject2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofProject2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const ChangeLink = (id, value, index) => {
    const arrneedtoChange = numofProject2.find(
      (item) =>
        id == item.id &&
        index == item.Fatherindex &&
        item.FatherComponent == "Project1"
    );
    let arrCopy = { ...arrneedtoChange };
    arrCopy["link"] = value;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofProject2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofProject2(newArr2);
    addUpdate(newArr1);
    forceUpdate();
  };
  const changeImage = (id, URL, index) => {
    const arrneedtoChange = numofProject2.find(
      (item) =>
        id == item.id &&
        index == item.Fatherindex &&
        item.FatherComponent == "Project1"
    );
    let arrCopy = { ...arrneedtoChange };
    arrCopy["URL"] = URL;
    let newArr1 = [...partArr];
    let indx0 = newArr1.findIndex((x) => x.id === arrneedtoChange.id);
    newArr1[indx0] = arrCopy;
    let newArr2 = [...numofProject2];
    let indx = newArr2.findIndex((x) => x.id === arrneedtoChange.id);
    newArr2[indx] = arrCopy;
    setnumofProject2(newArr2);
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
      let numIndxinCompo = numofProject2.indexOf(deleteEle);
      numofProject2.splice(numIndxinCompo, 1);
      setnumofProject2(numofProject2);
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
      className="w-full py-[60px] bg-c1"
      id={faindex}
    >
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[100px] h-[40px] border-c4 border-[5px] rounded-[10px] text-ct font-para font-bold text-[18px] text-center bg-c3 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Project
        </div>
        {numofProject2.map(({ link, title, id, URL, Component }, index) => (
          <Component
            decreaseStateFunc={decreaseStateFunc}
            index={index}
            titledes={title}
            linkdes={link}
            ChangeTitlefunc={ChangeTitle}
            ChangeLinkfunc={ChangeLink}
            id={id}
            increaseStatefunc={IncreaseElement}
            ChangeImagefunc={changeImage}
            image={URL}
            key={`Little_Part_${index}_${id}`}
            keymame={`Little_Part_${faindex}_${id}`}
            fatherindx={faindex}
          />
        ))}
      </div>
    </ComponentWrapper>
  );
}

export default Project2;
