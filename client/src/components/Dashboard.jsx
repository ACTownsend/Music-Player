import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from './Header';
import {isActiveStyles, isNotActiveStyles} from "../utils/styles";
import DashboardAlbums from "./DashboardAlbums";
import DashboardArtists from "./DashboardArtists";
import DashboardSongs from "./DashboardSongs";
import DashboardHome from './DashboardHome';
import DashboardNewSong from './DashboardNewSong';


const Dashboard = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-evenly bg-primary">
       <Header />
      <div className='w-full my-2 p-4 flex items-center justify-evenly'>
        <NavLink to={"/dashboard/home"}>Home</NavLink> 
        <NavLink to={"/dashboard/songs"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Songs</NavLink> 
        <NavLink to={"/dashboard/artists"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Artists</NavLink> 
        <NavLink to={"/dashboard/albums"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Albums</NavLink> 

      </div>

      <div classname="my-4 w-full p-4">
        <Routes>
          <Route path="/home" element={<DashboardHome />}/>
          <Route path="/songs" element={<DashboardSongs />}/>
          <Route path="/artists" element={<DashboardArtists/>}/>
          <Route path="/albums" element={<DashboardAlbums />}/>
          <Route path="/newSong" element={<DashboardNewSong />}/>

        </Routes>
      </div>
    </div>
  );
};

export default Dashboard