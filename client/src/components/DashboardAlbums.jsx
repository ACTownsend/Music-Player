import React, { useEffect } from 'react'
import { useStateValue } from '../context/StateProvider'
import { getAllAlbums } from '../api'
import { actionType } from '../context/reducer'
import SongCard from './SongCard'
import { useState } from 'react'

/**
 * DashboardAlbums component that represents the Albums page on the dashboard.
 * @constructor
 * @returns {JSX.Element} JSX element that renders the Albums page.
 */
const DashboardAlbums = () => {
  const [filteredSongs, setFilteredSongs] = useState(null);
  const [songFilter, setSongFilter] = useState("");
  const [{allAlbums }, dispatch] = useStateValue();
  const [isFocus, setIsFocus] = useState(false);
    useEffect(() => {
      if (!allAlbums) {
        getAllAlbums().then((data) => {
          dispatch({ type: actionType.SET_ALL_ALBUMS, allAlbums: data.album });
        });
      }
    }, []); 
    useEffect(() => {
      if (songFilter.length > 0) {
        const filtered = allAlbums.filter(
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
         placeholder='Search for Albums...'
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

        <AlbumContainer data={allAlbums} />

      </div> 
    </div>
  )
}
/**
 * AlbumContainer component that renders a list of albums.
 * @param {Object} data - An object containing album data.
 * @returns {JSX.Element} JSX element that renders the album list.
 */
export const AlbumContainer = ({data}) => {
  return (
    <div className="w-full flex flex-wrap gap-3 items-center justify-evenly">
      {data &&
       data.map((album, i) => (
        <SongCard key={album._id} data={album} index={i}/>
      ))}
    </div>
  );
};

export default DashboardAlbums