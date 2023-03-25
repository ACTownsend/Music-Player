import React, { useEffect } from 'react'
import { useStateValue } from '../context/StateProvider'
import { getAllAlbums } from '../api'
import { actionType } from '../context/reducer'
import SongCard from './SongCard'

/**
 * DashboardAlbums component that represents the Albums page on the dashboard.
 * @returns {JSX.Element} JSX element that renders the Albums page.
 */
const DashboardAlbums = () => {
  const [{allAlbums }, dispatch] = useStateValue();
    useEffect(() => {
      if (!allAlbums) {
        getAllAlbums().then((data) => {
          dispatch({ type: actionType.SET_ALL_ALBUMS, allAlbums: data.album });
        });
      }
    }, []); 

  return (
    <div className='w-full p-4 flex items-center justify-center flex-col'>
      

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