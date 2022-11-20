import { useRef } from "react";
import StartImage from "../../Asset/start-image.png";
import Arrow from "../../Asset/Arrow.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center h-full w-full bg-cover bg-no-repeat bg-[url('../Asset/Main-background.png')]">
      <div className="relative w-[600px] h-[600px] rounded-full group">
        <img
          className="rounded-full w-full h-full"
          src={StartImage}
          alt="start"
        />
        <Link to="/build">
          <button className="group-hover:invisible group-hover:opacity-0 bg-black absolute font-para text-[40px] top-1/2 rounded-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80px] text-white opacity-[0.7] transition-all ease-in-out duration-75 ">
            BUILD YOUR PORTFOLIO
          </button>
          <button className="group-hover:visible group-hover:opacity-100 opacity-0 invisible flex justify-center items-center flex-col font-para text-[50px] text-white w-[400px] h-[160px] rounded-[50px] bg-[#317BEB] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out">
            GET STARTED
            <img src={Arrow} alt="No name" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
