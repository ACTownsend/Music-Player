import React from 'react'
import { useStateValue } from '../context/StateProvider'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = () => {
  const [{allSongs, songIndex, isSongPlaying}, dispatch] = useStateValue();
  return (
    <div className='w-full flex items-center gap-3 overflow-hidden'>
      <div className='w-full items-center gap-3 p-4 flex relative'>
      
        <img src={allSongs[songIndex]?.imageURL} alt=''className='w-40 h-20 object-cover rounded-md'/>
        <div className='flex items-center flex-col'>
          <p className='text-xl text-headingColor font-semibold'>
            {allSongs[songIndex]?.name}
            <span className='text-base'>({allSongs[songIndex]?.album})</span>
          </p>
          <p className="text-textColor">
            {allSongs[songIndex]?.artist}{" "}
            <span className='text-sm text-textColor font-semibold'>({allSongs[songIndex]?.category})</span>
          </p>
        </div>
        <div className='flex-1'>
          <AudioPlayer
          src={allSongs[songIndex]?.songURL}
          onPlay={() => console.log("is playing")}
          autoPlay={true}
          showSkipControls={true}
          //onClickNext={nextTrack}
          //onClickPrevious={previousTrack}
          />
        </div>

      </div>
    </div>
  )
}

export default MusicPlayer

