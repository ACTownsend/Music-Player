import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className='flex items-center w-full p-4 md:py-2 md:px-6'>
      <NavLink to={"/"}>
        <p>home</p>
      </NavLink>
      <ul className="flex items-center justify-center ml-7">
          <li className='mx-5 text-lg'><NavLink to = {"/dashboard/home"}>Dashboard</NavLink></li>
          <li className='mx-5 text-lg'><NavLink to = {"/music"}>Musics</NavLink></li>
          <li className='mx-5 text-lg'><NavLink to = {"/premium"}>Premium</NavLink></li>
          <li className='mx-5 text-lg'><NavLink to = {"/contact"}>Contact Us</NavLink></li>

      </ul>
    </header>
  )
};

export default Header