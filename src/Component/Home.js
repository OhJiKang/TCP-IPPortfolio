import { useRef } from "react";
import StartImage from "../Asset/start-image.png";
import Arrow from "../Asset/Arrow.svg";

function Home() {
  const buildBtn = useRef(0);
  const startBtn = useRef(0);
  const handleMouseOver = (e) => {
    buildBtn.current.classList.add('invisible', 'opacity-0');
    startBtn.current.classList.remove('invisible', 'opacity-0');
  };

  const handleMouseOut = (e) => {
    buildBtn.current.classList.remove('invisible', 'opacity-0');
    startBtn.current.classList.add('invisible', 'opacity-0');
  }
  return (
    <div className="flex justify-center items-center h-full w-full bg-cover bg-no-repeat bg-[url('../Asset/Main-background.png')]">
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="relative w-[600px] h-[600px] rounded-full">
        <img className="rounded-full w-full h-full" src={StartImage} alt="start" />
        <button
          ref={buildBtn}
          className="bg-black absolute font-para text-[40px] top-1/2 rounded-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80px] text-white opacity-[0.7] transition-all ease-in-out duration-75 "
        >
          BUILD YOUR PORTFOLIO
        </button>
        <button
          ref={startBtn}
          className="invisible flex justify-center items-center flex-col font-para text-[50px] text-white w-[400px] h-[160px] rounded-[50px] bg-[#317BEB] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out"
        >
          GET STARTED
          <img src={Arrow}/>

        </button>
      </div>
    </div>
  );
}

export default Home;
