import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-slate-800 text-white font-bold uppercase'>
      <div className="flex justify-between items-center mx-auto container px-5 py-6">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-red-500 rounded-full m-2"></div>
          <div className="w-5 h-5 bg-yellow-500 rounded-full m-2"></div>
          <div className="w-5 h-5 bg-green-500 rounded-full m-2"></div>
          <NavLink to="/">Ricardo Mino</NavLink>
        </div>

        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <nav className={`flex-col lg:flex-row lg:flex gap-4 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
          <NavLink 
            to="/" 
            className={({isActive}) => isActive ? 'text-fuchsia-500 font-bold uppercase' : "text-white font-bold uppercase"
            }>Home</NavLink>
          <NavLink 
            to="/aboutme" 
            className={({isActive}) => isActive ? 'text-red-500 font-bold uppercase' : "text-white font-bold uppercase"
            }>About me</NavLink>
          <NavLink 
            to="portfolio" 
            className={({isActive}) => isActive ? 'text-yellow-500 font-bold uppercase' : "text-white font-bold uppercase"}>Portfolio</NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => isActive ? 'text-green-500 font-bold uppercase' : "text-white font-bold uppercase"}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
