import React from 'react'
import {NavLink} from "react-router-dom"
import {IoAdd, IoPause, IoPlay, IoTrash } from "react-icons/io5"
import { useState } from 'react'


const DashboardSongs = () => {
  const [songFilter, setSongFilter] = useState("");
  const [isFocus, setIsFocus] = useState(false);
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
         onChange={(e) => setsongFilter(e.target.value)}
         onBlur={() => {setIsFocus(false);} }
         onFocus={() => setIsFocus(true) }
         />
      </div>
    </div>
  )
}

export default DashboardSongs