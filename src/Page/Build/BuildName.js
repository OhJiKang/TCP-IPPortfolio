import { useEffect, useRef } from "react";
import ResetNameBtn from "../../Asset/ResetNameBtn.svg";

function BuildName({ name, setName }) {
  const inputField = useRef();
  if (window.localStorage.getItem("Name")) {
    name = window.localStorage.getItem("Name");
  }
  useEffect(() => {
    window.localStorage.setItem("Name", name);
  }, [name]);
  const handleReset = () => {
    inputField.current.value = "";
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="m-auto w-[480px] h-full pt-[290px] flex items-center flex-col">
      <div className="font-heading text-[40px] font-[600] text-center">
        TELL US THE NAME OF YOUR BUSINESS OR PROJECT
      </div>
      <div className="w-[400px] text-[18px] font-para text-center text-[#6A6666] my-4">
        People will find you by this name. This can be your own name, your
        business name or the name of your project.
      </div>
      <div className="w-[480px] h-[40px] pl-[20px] bg-[#E2E2E2] border-b-[0.5px] border-black relative flex flex-row ">
        <input
          ref={inputField}
          className="bg-[#E2E2E2] h-full grow outline-none font-para"
          autoFocus
          spellCheck={false}
          type="text"
          value={name}
          onInput={handleChange}
          placeholder="Enter the name"
        />
        <img
          onClick={handleReset}
          className="w-[20px] h-auto m-[10px] cursor-pointer"
          src={ResetNameBtn}
        />
      </div>
      <div className="w-[400px] text-[18px] font-para text-center text-[#6A6666] my-4">
        We will put this name on top of your portfolio
      </div>
    </div>
  );
}

export default BuildName;
