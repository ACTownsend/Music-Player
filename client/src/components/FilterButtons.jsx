import React from 'react'
import { useState } from 'react' 
import { actionType } from '../context/reducer'
import { useStateValue } from "../context/StateProvider";

/**
 * Component that renders filter buttons to filter search results by category, artist or album.
 * @param {object} filterData - Data used to generate the filter buttons
 * @param {string} flag - Category, Artist, or Album 
 * @returns {JSX.Element} - Returns the filter buttons
 */
const FilterButtons = ({filterData, flag}) => {
  const [filterName, setfilterName] = useState(null) 
  const [filterMenu, setfilterMenu] = useState(false) 
  const [dispatch] = useStateValue();

  /**
   * Update filter button name and dispatches action to update filter term.
   * @param {string} name - Name of the filter button
   * @returns {void}
   */
  const updateFilterButton = (name) => {
    setfilterName(name) 
    setfilterMenu(false) 
    if (flag === "Category") {
      dispatch({ type: actionType.SET_FILTER_TERM, filterTerm: name });
    }
  } 
  return (
    <div className='border border-gray-300 rounded-md px-4 py-1 relative cursor-pointer hover:border-gray-400'>
        <p className='text-base tracking-wide text-textColor flex items-center gap-2'
         onClick={() => setfilterMenu(!filterMenu)}>


          {!filterName && flag}
          {filterName && (
            <>
            {filterName.length > 15 ? `${filterName.slice(0, 14)}...`: filterName}
            </>
          )}
          <span className={`text-base text-textColor duration-150 transition-all ease-in-out ${filterMenu ? "rotate-180" : "rotate-0"}`}>v </span>
        </p>

        {filterData && filterMenu && (
          <div className='w-48 z-50 backdrop-blur-sm max-h-44 overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 py-2 flex flex-col rounded-md shadow-md absolute top-8 left-0'>
            {filterData?.map((data) => (
              <div
               key={data.name}
               className='flex items-center gap-2 px-4 py-1 hover:bg-gray-200'
               onClick={() => updateFilterButton(data.name)}
              >
                {(flag === "Artist" ||  flag === "Album") && (
                  <img
                    src={data.imageURL}
                    className='w-8 min-w-[32px] rounded-full object-cover'
                    alt="alt"
                  />
                  )}
                  <p className='w-full '>
                    {data.name.length > 15
                     ? `${data.name.slice(0,15)}...` 
                     : data.name }
                  </p>
              </div>
            ))}  
          </div>
        )} 
        </div>

  )
}

export default FilterButtons 