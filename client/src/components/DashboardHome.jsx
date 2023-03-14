import React, { useEffect } from 'react'
import { useStateValue } from '../context/StateProvider'
import {GiLoveSong, GiMusicalNotes} from "react-icons/gi"
import {RiUserStarFill} from "react-icons/ri"
import { getAllAlbums, getAllArtists, getAllSongs } from "../api";
import { actionType } from '../context/reducer';

export const DashboardCard = ({icon, name, count}) => {
  const bg_color = bgColours[parseInt(Math.random() * bgColours.length)]
  return (
    <div style={{background: `${bg_color}`}} className='p4 w-40 gap-3 h-auto rounded-lg shadow-md flex flex-wrap'>
      {icon}
      <p className='text-1 text-textColor font-semibold'>{name}</p>
      <p className='text-1 text-textColor'>{count}</p>
    </div>
  )
}

const DashboardHome = () => {
  const [{allArtists, allSongs, allAlbums}, dispatch] = useStateValue();
  
  useEffect(() => {
    if (!allSongs) {
      getAllSongs().then((data) =>{
        console.log(data);
      })
    }
  }, []);

  return (
    <div className='w-full p-6 flex items-center justify-evenly flex-wrap'>
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </div>
  )
}

export default DashboardHome