import React, { useEffect } from "react";
import { getAllAlbums, getAllArtists, getAllSongs } from "../api";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { NavLink } from 'react-router-dom';
/**
 * Represents a card displaying the count of a specific item.
 * @constructor
 * @param {string} name - The name of the item to display.
 * @param {number} count - The count of the item to display.
 */
export const DashboardCard = ({ name, count }) => {

  return (
    <div
      className={`p-4 w-40 gap-3 h-auto rounded-lg shadow-md flex flex-col items-center justify-center bg-green-400`}>
      <p className="text-xl text-textColor font-semibold">{name}</p>
      <p className="text-sm text-textColor">{count}</p>
    </div>
  );
};

/**
 * The dashboard homepage component.
 * @constructor
 */
const DashBoardHome = () => {
  const [{ allSongs, allArtists, allAlbums }, dispatch] =
    useStateValue();
  useEffect(() => {
    if (!allSongs) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.songs,
        });
      });
    }

    if (!allArtists) {
      getAllArtists().then((data) => {
        dispatch({ type: actionType.SET_ALL_ARTISTS, allArtists: data.artist });
      });
    }
 
    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispatch({ type: actionType.SET_ALL_ALBUMS, allAlbums: data.album });
      });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="w-full p-6 flex items-center gap-40 justify-evenly flex-wrap ">

      <NavLink to={"/dashboard/songs"}>
      <DashboardCard  name={"Songs"} count={allSongs?.length > 0 ? allSongs?.length : 0 }>Songs</DashboardCard>
      </NavLink>
      
      <NavLink to={"/dashboard/artists"}>
      <DashboardCard name={"Artists"} count={allArtists?.length > 0 ? allArtists?.length : 0}>Artists</DashboardCard>
      </NavLink>

      <NavLink to={"/dashboard/albums"}>
      <DashboardCard name={"Albums"} count={allAlbums?.length > 0 ? allAlbums?.length : 0} >Albums</DashboardCard>
      </NavLink>
    </div>
  );
};

export default DashBoardHome;