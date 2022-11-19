import LeftArrow from "../Asset/LeftArrow.svg";
import RightArrow from "../Asset/RightArrow.svg";

function Build() {
    return (
        <div className="w-full h-full bg-[#CDD9C5]">
            <div className="w-[1200px] h-full bg-white m-auto relative">
                <div className="footer px-[20px] w-full h-[64px] absolute bottom-0 border-t-2 border-[#DBDBDB] flex items-center flex-row justify-between" >
                    <button className=" h-[40px] border-[1px] flex justify-center items-center text-[18px] p-3" >
                        <img className="mr-3" src={LeftArrow}/>
                        Back
                    </button>
                    <button className="h-[40px] border-[1px] flex justify-center items-center text-[18px] p-3">
                        Continue
                        <img className="ml-3" src={RightArrow}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Build;