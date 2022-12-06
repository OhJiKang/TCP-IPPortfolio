import { useEffect, useMemo, useReducer, useState } from "react";
import Contact1Compo from "../../Component/Contact1";
import useStore from "../Edit/Store/Store";
import ComponentWrapper from "./ComponentWrapper";
import Section from "./Section";
function Contact1({ index, ChangeTitlefunc }) {
  const addPart = useStore((state) => state.addPart);
  const partArr = useStore((state) => state.PartArr);
  const getArr = [...partArr];
  console.log(getArr);
  let NewarrContact = getArr.filter(
    (item) => item.Fatherindex == index && item.FatherComponent == "Contact0"
  );
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  let InitValue = [
    {
      id: 1,
      FatherComponent: "Contact0",
      Fatherindex: index,
      key: "Contact1Compo",
      Component: Contact1Compo,
      title: "Facebook",
      link: "facebook.com/abcxyz",
    },
  ];
  console.log(NewarrContact);
  if (NewarrContact.length != 0) {
    InitValue = NewarrContact;
  }
  InitValue.forEach((i) => {
    if (!i.hasOwnProperty("Component")) {
      i["Component"] = Contact1Compo;
    }
  });
  const [numofContact1, setnumofContact1] = useState(InitValue);
  const IncreaseElement = () => {
    let idtoadd = numofContact1.length + 1;
    let newnumofContact1 = [
      ...numofContact1,
      {
        id: idtoadd,
        FatherComponent: "Contact0",
        Fatherindex: index,
        key: "Contact1Compo",
        Component: Contact1Compo,
        title: "Facebook",
        link: "facebook.com/abcxyz",
      },
    ];
    setnumofContact1(newnumofContact1);
    addPart(newnumofContact1);
    forceUpdate();
  };
  const ChangeTitle = (id, value) => {
    const arrneedtoChange = numofContact1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["title"] = value;
    let newArr = numofContact1;
    newArr[arrCopy["id"] - 1] = arrCopy;
    setnumofContact1(newArr);
    addPart(newArr);
    forceUpdate();
  };
  const ChangeLink = (id, value) => {
    const arrneedtoChange = numofContact1.find((item) => id == item.id);
    let arrCopy = { ...arrneedtoChange };
    arrCopy["link"] = value;
    let newArr = numofContact1;
    newArr[arrCopy["id"] - 1] = arrCopy;
    setnumofContact1(newArr);
    addPart(newArr);
    forceUpdate();
  };
  return (
    <ComponentWrapper
      increaseStatefunc={IncreaseElement}
      className="w-full py-[60px] bg-c1"
      id={index}
    >
      <div className="relative w-[820px] border-c4 border-[5px] bg-c2 rounded-[40px] m-auto flex flex-col gap-y-[20px] items-center py-[35px]">
        <div className="absolute w-[100px] h-[40px] border-c4 border-[5px] rounded-[10px] text-white font-para font-bold text-[18px] text-center bg-c2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Contact
        </div>
        {numofContact1.map(
          ({ link, title, id, FatherComponent, key, Component }, index) => (
            <Component
              titledes={title}
              linkdes={link}
              ChangeTitlefunc={ChangeTitle}
              ChangeLinkfunc={ChangeLink}
              id={id}
              increaseStatefunc={IncreaseElement}
              key={`Little_Part_${index}`}
            />
          )
        )}
      </div>
    </ComponentWrapper>
  );
}

export default Contact1;
