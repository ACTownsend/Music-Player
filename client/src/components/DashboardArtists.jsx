import React, { useEffect } from 'react'
import { useStateValue } from '../context/StateProvider'
import { getAllArtists } from '../api'
import { actionType } from '../context/reducer'
import SongCard from './SongCard'
import { useState } from 'react'

/**
 * Renders a dashboard for the list of artists.
 * It fetches all artists from the database using the 'getAllArtists' API.
 */
const DashboardArtists = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [{allArtists }, dispatch] = useStateValue();
  const [filteredSongs, setFilteredSongs] = useState(null);
  const [songFilter, setSongFilter] = useState("");
  // Fetch all artists when the component mounts.
    useEffect(() => {
      if (!allArtists) {
        getAllArtists().then((data) => {
          dispatch({
             type: actionType.SET_ALL_ARTISTS,
             allArtists: data.artist });
        });
    }
  }, []); 
  useEffect(() => {
    if (songFilter.length > 0) {
      const filtered = allArtists.filter(
        (data) =>
          data.name.toLowerCase().includes(songFilter)
      );
      setFilteredSongs(filtered);
    } else {
      setFilteredSongs(null);
    }
  }, [songFilter]);
  
  return (
    <div className='w-full p-4 flex items-center justify-center flex-col'>
        <input type="text"
         className={`w-52 px-4 py-2 border ${
           isFocus ? "bordergray-500 shadow-md" : "border-grey-300"} rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold `}
         placeholder='Search for Artists...'
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

      <div classname="relative w-full my-4 p-4 py-12 border border-gray-300 rounded-md">

        <ArtistContainer data={allArtists} />

      </div> 
    </div>
  )
}
/**
 * Renders a container for the list of artists.
 * @param {Array} data - The array of artist data to display.
 */
export const ArtistContainer = ({data}) => {
  return (
    <div className="w-full flex flex-wrap gap-3 items-center justify-evenly">
      {data &&
       data.map((artist, i) => (
        <SongCard key={artist._id} data={artist} index={i}/>
      ))}
    </div>
  );
};
export default DashboardArtists