import React, { useEffect } from "react";
import { getAllAlbums, getAllArtists, getAllSongs } from "../api";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

export const DashboardCard = ({ name, count }) => {

  return (
    <div
      className={`p-4 w-40 gap-3 h-auto rounded-lg shadow-md flex flex-col items-center justify-center`}>
      <p className="text-xl text-textColor font-semibold">{name}</p>
      <p className="text-sm text-textColor">{count}</p>
    </div>
  );
};

const DashBoardHome = () => {
  const [{ allSongs, artists, allAlbums }, dispatch] =
    useStateValue();
  useEffect(() => {
    if (!allSongs) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.data,
        });
      });
    }

    if (!artists) {
      getAllArtists().then((data) => {
        dispatch({ type: actionType.SET_ARTISTS, artists: data.data });
      });
    }
 
    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispatch({ type: actionType.SET_ALL_ALBUMNS, allAlbums: data.data });
      });
    }
  }, [allAlbums, allSongs, artists, dispatch]);
  return (
    <div className="w-full p-6 flex items-center justify-evenly flex-wrap">

      {/* prettier-ignore */}
      <DashboardCard name={"Songs"} count={allSongs?.length > 0 ? allSongs?.length : 0}>Songs</DashboardCard>

      {/* prettier-ignore */}
      <DashboardCard name={"Artist"} count={artists?.length > 0 ? artists?.length : 0}>Artist</DashboardCard>

      {/* prettier-ignore */}
      <DashboardCard name={"Album"} count={allAlbums?.length > 0 ? allAlbums?.length : 0} >Album</DashboardCard>
    </div>
  );
};

export default DashBoardHome;