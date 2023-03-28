import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom"
import {useStateValue} from "../context/StateProvider";
import { getAllSongs } from '../api';
import {actionType} from "../context/reducer"
import SongCard  from './SongCard';

/**
 * Component representing a dashboard for displaying all the songs.
 * @constructor
 * @function
 */
const DashboardSongs = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [{allSongs}, dispatch] = useStateValue(null);
  const [filteredSongs, setFilteredSongs] = useState(null);
  const [songFilter, setSongFilter] = useState("");
  
  useEffect(() => {
    // Fetches all songs when the component mounts.
    if(!allSongs) {
      getAllSongs().then((data) => {
        dispatch({
          type : actionType.SET_ALL_SONGS,
          allSongs : data.songs,
        })
      });
    }
  }, []); 
  useEffect(() => {
    if (songFilter.length > 0) {
      const filtered = allSongs.filter(
        (data) =>
          data.artist.toLowerCase().includes(songFilter) ||
          data.name.toLowerCase().includes(songFilter)
      );
      setFilteredSongs(filtered);
    } else {
      setFilteredSongs(null);
    }
  }, [songFilter]);
  return (
    <div className='w-full p-4 flex items-center justify-center flex-col'>
      <div className='w-full flex justify-center items-center gap-24'>
        <NavLink to={"/dashboard/newSong"} className="flex items-center px-4 py-3 border rounded-md border-gray-300 hover:border-gray-500 hover:shaodw-md cursor-pointer">
          <p>+</p>
        </NavLink>

        <input type="text"
         className={`w-52 px-4 py-2 border ${
           isFocus ? "bordergray-500 shadow-md" : "border-grey-300"} rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold `}
         placeholder='Search for Songs...'
         value={songFilter}
         onChange={(e) => setSongFilter(e.target.value.toLowerCase())}
         />
         {songFilter && (
          <i
            onClick={() => {
              setSongFilter("");
              setFilteredSongs(null);
            }} />
         )}
      </div>

      <div classname="relative w-full my-4 p-4 border border-gray-300 rounded-md">
        <div>
          <p className='text-xl font-bold'>
            <span className='text-sm font-semibold text-textColor'>
              Count :{" "}
            </span>
            {allSongs?.length}
          </p>
        </div>

        <SongContainer data={filteredSongs ? filteredSongs : allSongs} />

      </div> 
    </div>
  );
};

/**
 * Component for displaying all the song cards.
 * @function
 * @param {Object[]} data - An array of song data.
 */
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