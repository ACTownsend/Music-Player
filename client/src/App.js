import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Home } from './components';

const App = () => {
  return (
    <div className='h-auto min-w-[680px] bg-primary flex justify-center items-center'>
        <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
    </div>
  )
}

export default App 