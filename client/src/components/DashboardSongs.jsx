import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom"
import {useStateValue} from "../context/StateProvider";
import { getAllSongs } from '../api';
import {actionType} from "../context/reducer"
import SongCard  from './SongCard';


const DashboardSongs = () => {
  const [songFilter, setSongFilter] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [{allSongs}, dispatch] = useStateValue(null);

  useEffect(() => {
    if(!allSongs) {
      getAllSongs().then((data) => {
        dispatch({
          type : actionType.SET_ALL_SONGS,
          allSongs : data.songs,
        })
      });
    }
  }, []); 
  return (
    <div className='w-full p-4 flex items-center justify-center flex-col'>
      <div className='w-full flex justify-center items-center gap-24'>
        <NavLink to={"/dashboard/newSong"} className="flex items-center px-4 py-3 border rounded-md border-gray-300 hover:border-gray-500 hover:shaodw-md cursor-pointer">
          <p>+</p>
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
      </div>

      <div classname="relative w-full my-4 p-4 border border-gray-300 rounded-md">
        <div className='absolute top-4 left-4'>
          <p className='text-xl font-bold'>
            <span className='text-sm font-semibold text-textColor'>
              Count :{" "}
            </span>
            {allSongs?.length}

          </p>
        </div>

        <SongContainer data={allSongs} />

      </div> 
    </div>
  );
};

export const SongContainer = ({data}) => {
  return (
    <div className="w-full flex flex-wrap gap-3 items-center justify-evenly">
      {data &&
       data.map((song, i) => (
        <SongCard key={song._id} data={song} index={i}/>
      ))}
    </div>
  );
};
export default DashboardSongs