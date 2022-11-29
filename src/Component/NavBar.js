import Logo from "../Asset/Logo.svg";

function NavBar() {
  return (
    <div className="font-para text-[18px] navbar-container fixed w-full h-[64px] bg-[#EFEADD] flex flex-row justify-between items-center p-[12px] z-10">
      <img className="logo ml-7" src={Logo}></img>
      <div className="">
        <a className="px-3" href="#">
          ABOUT US
        </a>
        <a className="px-3" href="#">
          CONTACT
        </a>
        <a className="px-3" href="#">
          HELP
        </a>
      </div>
      <div>
        <a className="px-3" href="#">
          Sign Up
        </a>
        <a className="px-3" href="#">
          Login
        </a>
        <a className="px-3" href="#">
          EN
        </a>
      </div>
    </div>
  );
}

export default NavBar;
