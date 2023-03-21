import React from 'react'

const SongCard = ({data, index}) => {
  return (
    <div className='relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center'>
        <div className='w-40 min-w-[160px] h-40 min0-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden'>
            <img whileHover={{scale: 1.05}} src={data.imageURL} className='w-full h-full rounded-lg object-cover' alt='img'></img>
        </div>
        <p className='text-base text-headingColor font-semibold my-2'> 
            {data.name.length > 25 ? `${data.name.slice(0,25)}...` : data.name}
            {data.artist.length > 25 ? `${data.artist.slice(0,25)}...` : data.artist}
            <span className='block text-sm text-gray-400 my-1 '>{data.artist} </span>
        </p>
        <div className='w-full absolute bottom-2 right-2 flex items-center justify-between px-4'>
            <p whileTap={{scale: 0.75}}
            className='text-base text-red-400 drop-shadow-md hover:text-red-600'>delete</p>
        </div>
    </div>
  );
};

export default SongCard