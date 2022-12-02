import Dog from "../../Asset/Dog.png";

function AboutMe1() {
  return (
    <div className="w-[900px] h-[400px] rounded-[40px] pt-[90px] bg-[url('../Asset/AboutmeBackground1.png')]">
      <div className="relative mx-auto w-[740px] h-[280px] bg-c2 border-c4 border-[5px] rounded-[100px] pt-[70px]">
        <div className="absolute top-0 left-1/2 border-[5px] rounded-full h-[140px] w-[140px] border-c4 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <img src={Dog} />
        </div>
        <div className="w-[600px] h-[200px] m-auto text-white bg-c3 border-c4 border-[2px] rounded-[40px] text-center font-para pt-[10px]">
          <p className="text-[18px]">Hello my name is Gaugau</p>
          <p className="text-[14px] leading-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe1;
