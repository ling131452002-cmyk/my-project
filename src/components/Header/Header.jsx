import { Link } from "react-router-dom";
import {useState} from "react";

function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <header className="h-[60px] relative z-50 flex w-full bg-[#FDF7F1] xs:h-[64px] xs:justify-center xs:py-[12px] xs:px-[40px]">
      <nav className="flex flex-col w-full max-w-[1296px] xs:flex-row xs:justify-between xs:items-center">
        <ul className="py-[8px] px-[12px] xs:py-[0px] xs:px-[0px]">
          <li>
            <Link to="/">
              <img className="sm:hidden" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/0163848842b749c38a767e05caabbbd18d2f6dc9/2026-web-camp/device-mobile.svg"/>
              <img className="hidden sm:block" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/0163848842b749c38a767e05caabbbd18d2f6dc9/2026-web-camp/device-pc.svg"/>
            </Link>
          </li>
        </ul>
       <ul className={`${menuOpen?"flex-col":"hidden xs:flex"} bg-[#FDF7F1] text-center w-full flex gap-[12px] p-[12px] xs:gap-[24px] xs:flex-row xs:w-auto`}>
            <li className="py-[4px] px-[12px]"><Link to="/services">服務項目</Link></li>
            <li className="py-[4px] px-[12px]"><Link to="/portfolio">作品集</Link></li>
            <li className="py-[4px] px-[12px]"><Link to="/blog">部落格</Link></li>
            <li className="py-[4px] px-[12px]"><Link to="/contact">聯絡我</Link></li>
        </ul>
      </nav>
        <button onClick={()=>setMenuOpen(prev => !prev)} className="absolute right-[12px] top-[8px] xs:hidden">
          {menuOpen?<span className="material-symbols-outlined">close</span>:
          <span className="material-symbols-outlined">menu</span>}
          
        </button>
    </header>
    <div className={`${menuOpen?"xs:hidden":"hidden"} w-full h-screen fixed top-0 left-0 z-40 bg-[#00000099]`}></div>
    </>
  );
}

export default Header;
