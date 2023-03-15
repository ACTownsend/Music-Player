import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from './Header';
import {IoHome} from "react-icons/io5";
import {isActiveStyles, isNotActiveStyles} from "../utils/styles";
import DashboardAlbums from "./DashboardAlbums";
import DashboardArtists from "./DashboardArtists";
import DashboardSongs from "./DashboardSongs";
import DashboardHome from './DashboardHome';


const Dashboard = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
        <Header />
      <div className='w-[60%] my-2 bg-blue-500 p-4 flex items-center justify-evenly'>
        <NavLink to={"/Dashboard/Home"} classname={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles}><IoHome classname="text-2xl text-textColor" /></NavLink> 
        <NavLink to={"/Dashboard/Songs"} classname={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Songs</NavLink> 
        <NavLink to={"/Dashboard/Artists"} classname={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Artists</NavLink> 
        <NavLink to={"/Dashboard/Albums"} classname={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Albums</NavLink> 

      </div>

      <div classname="my-4 w-full p-4">
        <Routes>
          <Route path="/Home" element={<DashboardHome />}/>
          <Route path="/Songs" element={<DashboardSongs />}/>
          <Route path="/Artists" element={<DashboardArtists/>}/>
          <Route path="/Albums" element={<DashboardAlbums />}/>
          <Route path="/newSong" element={<DashboardHome />}/>

        </Routes>
      </div>
    </div>
  )
}

export default Dashboard