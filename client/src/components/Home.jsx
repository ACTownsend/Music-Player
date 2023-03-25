import React from 'react';
import Header from './Header';

/**
 * Represents the home page of the website.
 * @function
 * @return {JSX.Element} The home page component.
 */
const Home = () => {
  return (
    <div classname ="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
    </div>
  )
};

export default Home