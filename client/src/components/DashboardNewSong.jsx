import React from 'react' 
import { useState } from 'react' 
import FilterButtons from './FilterButtons' 
import { genres } from '../utils/filters' 
import { useStateValue } from '../context/StateProvider' 
import { getAllAlbums, getAllArtists, getAllSongs, saveNewSong } from '../api' 
import { actionType } from '../context/reducer' 
import { useEffect } from 'react' 
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage" 
import { storage } from "../config/firebase.config" 
const DashboardNewSong = () => {

  const [songName, setsongName] = useState("") 
  const [isImageLoading, setisImageLoading] = useState(false)
  const [songImageCover, setsongImageCover] = useState(null)
  const [imageUploadProgress, setimageUploadProgress] = useState(0)

  const [audioImageCover, setaudioImageCover] = useState(null)
  const [audioUploadProgress, setaudioUploadProgress] = useState(0)
  const [isAudioLoading, setisAudioLoading] = useState(false)


  const [{allArtists, allSongs, allAlbums, artistFilter, albumFilter, filterTerm}, dispatch] = useStateValue() 
  useEffect(() => {
    if(!allArtists) {
      getAllArtists().then(data => {
        console.log(data) 
        dispatch({
          type: actionType.SET_ALL_ARTISTS,
          allArtists: data.artist,
        })
      }) 
    }
    if(!allAlbums) {
      getAllAlbums().then(data => {
        console.log(data) 
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.album,
        })
      }) 
    }
  }, [allArtists, allAlbums, dispatch]) 


  const saveSong = () => {
    if(!songImageCover || !audioImageCover) {

    }
    else {
      setisAudioLoading(true)
      setisImageLoading(true)

      const data = {
        name : songName,
        imageURL : songImageCover,
        songURL : audioImageCover,
        album : albumFilter,
        artist : artistFilter,
        category : filterTerm,
      }
      saveNewSong(data).then((res) => {
        getAllSongs().then((songs) => {
          dispatch({
            type: actionType.SET_ALL_SONGS,
            allSongs: songs.songs,
          })
        })
      })
    }
  }
  return (
    <div className='flex flex-col items- justify-center p-4 border border-gray-300 gap-4 rounded-md'>
      <input type="text" placeholder="Song name" className='w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent' value={songName} onChange={(e) => setsongName(e.target.value)} />


      <div className='flex w-full justify-between flex-wrap items-center gap-4'>
        <FilterButtons filterData={allArtists} flag={"Artist"} />
        <FilterButtons filterData={allAlbums} flag={"Albums"} />
        <FilterButtons filterData={genres} flag={"Category"} />
        </div>

        <div className='bg-card backdrop-blur-md w-full h-300 rounded-md border-2 border-dotted border-gray-300 cursor-pointer '> 
          {isImageLoading && <FileLoader progress = {imageUploadProgress} />}
          {!isImageLoading &&(
            <>{!songImageCover ? (<FileUploader updateState = {setsongImageCover} setProgress = {setimageUploadProgress} isLoading = {setisImageLoading} isImage = {true}/>
              ) : (
              <div className='relative w-full h-full overflow-hidden rounded-md'>
                <img className='w-full h-full object-cover' src={songImageCover} alt="" />
              </div>
            )}  
            </>
          )} 
        </div>

      {/*audio*/}
    
        <div className='bg-card backdrop-blur-md w-full h-300 flex items-center justify-center rounded-md border-2 border-dotted border-gray-300 cursor-pointer '> 
          {isAudioLoading && <FileLoader progress = {audioUploadProgress} />}
          {!isAudioLoading &&(
            <>{!audioImageCover ? (<FileUploader updateState = {setaudioImageCover} setProgress = {setaudioUploadProgress} isLoading = {setisAudioLoading} isImage = {false}/>
              ) : (
              <div className='relative w-full h-full overflow-hidden rounded-md'>
                <audio controls src={audioImageCover} alt=""></audio>
              </div>
            )} 
            </>
          )} 
          
        </div>


        <div className='flex items-center justify-center w-60 cursor-pointer p-4 '>
                <button whileTap={{scale :0.75}}
                className='px-8 py-2 rounded-md text-white bg-red-600 hover:shadow-lg'
                onClick={saveSong}
                >
                  Save Song
                </button>
        </div>
    </div>
  ) 
} 

export const FileLoader = ({progress }) => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <p className='text-xl font-semibold text-textColor'>
        {Math.round(progress) > 0 && <>{Math.round(progress)}</> }
      </p>
      <div className='w-20 h-20 min-w-[40px] bg-red-600 flex items-center justify-center relative animate-ping rounded-full'>
        <div className='absolute inset-0 rounded-full bg-red-600 blur-xl'>

        </div>
      </div>
    </div>
  )
}

export const FileUploader = ({updateState, setProgress, isLoading, isImage }) => {
  const uploadFile = (e) => {
    isLoading(true) 
    const uploadedFile = e.target.files[0] 
    const storageRef = ref(
      storage,
      `${isImage ? "Images" : "Audio"}/${Date.now()}-${uploadedFile.name}`
    ) 

    const uploadTask = uploadBytesResumable(storageRef, uploadedFile) 

    uploadTask.on("state_changed", (snapshot) => {
      setProgress((snapshot.bytesTransferred / snapshot.totalBytes) *100) 
    },
    (error) => {
      console.log(error) 
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        updateState(downloadURL)
        isLoading(false)
      })
      }
    ) 
  } 
  return <label>
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='flex flex-col justify-center items-center cursor-pointer'>
        <p className='text-lg'>Upload {isImage ? "an image for the song" : "audio"}</p>
      </div>
    </div>
    <input className="w-0 h-0" onChange={uploadFile} type="file" name="upload-file" accept={`${isImage ? "image/*" : "audio/*"}`}/>
  </label>
}

export default DashboardNewSong 