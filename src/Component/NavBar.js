import Logo from '../Asset/Logo.svg';
import './NavBar.css';


function NavBar() {
    return (
        <div className="navbar-container fixed w-full h-[64px] bg-[#EFEADD] flex flex-row justify-between items-center p-[12px] z-10">
            <img className="logo translate-x-5" src={Logo}></img>
            <div className=''>
                <a className="px-3" href='#'>ABOUT US</a>
                <a className="px-3" href='#'>CONTACT</a>
                <a className="px-3" href='#'>HELP</a>
            </div>
            <div>
                <a className="px-3" href='#'>Sign Up</a>
                <a className="px-3" href='#'>Login</a>
                <a className="px-3" href='#'>EN</a>
            </div>
        </div>

    )
}

export default NavBar;

