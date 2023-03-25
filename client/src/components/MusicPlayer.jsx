import React from 'react'
import { useStateValue } from '../context/StateProvider'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';
import { actionType } from '../context/reducer';
import { useEffect } from 'react';
import { getAllSongs } from '../api';

/**
 * Represents the music player component.
 * @function
 */
const MusicPlayer = () => {
  /**
   * Plays the next song.
   * @function
   */
  const nextSong = () => {
    if(songIndex >= allSongs.length - 1){
      dispatch({
        type : actionType.SET_SONG_INDEX,
        songIndex : 0,
      })
    }
    else {
      dispatch({
        type : actionType.SET_SONG_INDEX,
        songIndex : songIndex + 1,
      })
    }
  }
  /**
   * Plays the previous song.
   * @function
   */
  const previousSong = () => {
    if(songIndex === 0){
      dispatch({
        type : actionType.SET_SONG_INDEX,
        songIndex : 0,
      })
    }
    else {
      dispatch({
        type : actionType.SET_SONG_INDEX,
        songIndex : songIndex - 1,
      })
    }
  }

  /**
   * Closes the music player.
   * @function
   */
  const closePlayer = () => {
    dispatch({
      type : actionType.SET_ISSONG_PLAYING,
      isSongPlaying : false,
    })
  }
  const [{allSongs, songIndex, isSongPlaying}, dispatch] = useStateValue();
  const [IsPlaylist, setIsPlaylist] = useState(false)
  return (
    <div className='w-full flex items-center gap-3'>
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

        <i onClick={() => setIsPlaylist(!IsPlaylist)}>
          <p className="text-textColor hover:text-headingColor text-3xl cursor-pointer"> Queue</p>
        </i>

        <div className='flex-1'>
          <AudioPlayer
          src={allSongs[songIndex]?.songURL}
          onPlay={() => console.log("is playing")}
          autoPlay={true}
          showSkipControls={true}
          showJumpControls={false}
          onClickNext={nextSong}
          onClickPrevious={previousSong}
          volume={0.5}
          onEnded={nextSong}
          
          />
        </div>
        {
          IsPlaylist &&
          <PlaylistCard />
          
        }
        <i onClick={closePlayer}>
          <p className="text-textColor relative bottom-10 hover:text-headingColor text-3xl cursor-pointer">X</p>
        </i>
      </div>
    </div>
  )
}



/**
 * Represents the playlist card component.
 * @function
 */
export const PlaylistCard = () => {
  const[{allSongs, songIndex, isSongPlaying}, dispatch] = useStateValue();
    /**
   * Fetches all songs and updates state when component mounts.
   * @function
   */
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
    
  /**
   * Sets the current song when a user clicks on a playlist item.
   * @function
   * @param {number} index - The index of the song in the playlist.
   */
    const setCurrentSong = (index) => {
      if (!isSongPlaying) {
        dispatch({
          type : actionType.SET_ISSONG_PLAYING,
          isSongPlaying : true,
        })
      }
      if (songIndex !== index) {
        dispatch({
          type : actionType.SET_SONG_INDEX,
          songIndex : index,
        })
      }
    }


  return <div className='absolute left-4 bottom-24 gap-2 py-2 w-350 max-w-[350px] h-510 max-h-[510px] flex flex-col overflow-y-scroll scrollbar-thin rounded-md shadow-md bg-primary'>
      {allSongs.length > 0 ? (
        allSongs.map((music, index) => (
          <div className='group w-full p-4 hover:bg-card flex gap-3 items-center cursor-pointer bg-transparent'
          onClick={() => setCurrentSong(index)}>
            <p className=''>list</p>
              <div className="flex items-start flex-col">
                <p className="text-lg text-headingColor font-semibold">
                  {`${
                    music?.name.length > 20
                      ? music?.name.slice(0, 20)
                      : music?.name
                  }`}{" "}
                  <span className="text-base">({music?.album})</span>
                </p>
                <p className="text-textColor">
                  {music?.artist}{" "}
                  <span className="text-sm text-textColor font-semibold">
                    ({music?.category})
                  </span>
                </p>
              </div>
          </div>
        ))
      ) : <></>}
  </div>
}

export default MusicPlayer

