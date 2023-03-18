import React from 'react';
import { useState } from 'react';
import FilterButtons from './FilterButtons';

const DashboardNewSong = () => {
  const [songName, setsongName] = useState("")
  return (
    <div className='flex flex-col items-center justify-center p-4 border border-gray-300 gap-4 rounded-md'>
      <input type="text" placeholder="Song name" className='w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent' value={songName} onChange={(e) => setsongName(e.target.value)}>


      </input>
      <div className='flex w-full justify-between flex-wrap items-center gap-4'>
        <FilterButtons filterData={""} flag={"Artist"} />
        <FilterButtons filterData={""} flag={"Albums"} />
        <FilterButtons filterData={""} flag={"Language"} />
        <FilterButtons filterData={""} flag={"Category"} />
        </div>
    </div>
  )
};

export default DashboardNewSong;