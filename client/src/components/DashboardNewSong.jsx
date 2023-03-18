import React from 'react';
import { useState } from 'react';
import FilterButtons from './FilterButtons';
import { genres } from '../utils/filters';
import { useStateValue } from '../context/StateProvider';
import { getAllAlbums, getAllArtists } from '../api';
import { actionType } from '../context/reducer';
import { useEffect } from 'react';

const DashboardNewSong = () => {

  const [songName, setsongName] = useState("");
  const [{allArtists, allAlbums}, dispatch] = useStateValue();
  useEffect(() => {
    if(!allArtists) {
      getAllArtists().then(data => {
        console.log(data);
        dispatch({
          type: actionType.SET_ALL_ARTISTS,
          allArtists: data.artist,
        })
      });
    }
    if(!allAlbums) {
      getAllAlbums().then(data => {
        console.log(data);
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.album,
        })
      });
    }
  }, [allArtists, allAlbums, dispatch]);

  return (
    <div className='flex flex-col items-center justify-center p-4 border border-gray-300 gap-4 rounded-md'>
      <input type="text" placeholder="Song name" className='w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent' value={songName} onChange={(e) => setsongName(e.target.value)}>


      </input>
      <div className='flex w-full justify-between flex-wrap items-center gap-4'>
        <FilterButtons filterData={allArtists} flag={"Artist"} />
        <FilterButtons filterData={allAlbums} flag={"Albums"} />
        <FilterButtons filterData={genres} flag={"Category"} />
        </div>
    </div>
  )
};

export default DashboardNewSong;