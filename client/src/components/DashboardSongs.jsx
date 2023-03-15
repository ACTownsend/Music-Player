import React from 'react'
import {NavLink} from "react-router-dom"
import {IoAdd } from "react-icons/io5"
import { useState } from 'react'
import { AiOutlineClear } from "react-icons/ai";
import { useEffect } from 'react';
import {useStateValue} from "../context/StateProvider";
import { getAllSongs } from '../api';
import {actionType} from "../context/reducer"


const DashboardSongs = () => {
  const [songFilter, setSongFilter] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [{allSongs}, dispatch] = useStateValue();

  useEffect(() => {
    if(!allSongs) {
      getAllSongs().then(data => {
        dispatch({
          type : actionType.SET_ALL_SONGS,
          allSongs : data.song,
        })
      });
    }
  }, []);
  return (
    <div className='w-full p-4 flex items-center justify-center flex-col'>
      <div className='w-full flex justify-center items-center gap-20'>
        <NavLink to={"/dashboard/newSong"} className="flex items-center justify-center px-4 py-3 border rounded-md border-gray-300 hover:border-gray-500 hover:shaodw-md cursor-pointer">
          <IoAdd />
        </NavLink>

        <input type="text"
         className={`w-52 px-4 py-2 border ${
           isFocus ? "bordergray-500 shadow-md" : "border-grey-300"} rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold `}
         placeholder='Search for songs...'
         value={songFilter}
         onChange={(e) => setSongFilter(e.target.value)}
         onBlur={() => {setIsFocus(false);} }
         onFocus={() => setIsFocus(true) }
         />

        <i>
          <AiOutlineClear classname="text-3xl text-textColor cursor-pointer" />
        </i>
      </div>

      <div classname="relative w-full my-4 p-4 border border-gray-300 rounded-md">
        <div className='absolute top-4 left-4'>
          <p>
            <span>Count</span>

          </p>
        </div>

      </div> 
    </div>
  )
};
export default DashboardSongs