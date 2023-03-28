import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Home, MusicPlayer } from './components';
import { useStateValue } from './context/StateProvider';

/**
 * The main application component.
 * @function
 * @returns {JSX.Element}
 */
const App = () => {
  const [{isSongPlaying }, dispatch] = useStateValue();
  return (
    <div className='h-auto min-w-[680px] bg-primary flex justify-center items-center'>
        <Routes>
          <Route path="/*" element={<Dashboard />}/>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
        {isSongPlaying && (
          <div className={'fixed min-w-[700px] h-26 inset-x-0 bottom-0 bg-cardOverlay drop-shadow-2xl backdrop-blur-md flex items-center justify-center'}>
            <MusicPlayer />
          </div>
        )}
    </div>
  )
}

export default App 