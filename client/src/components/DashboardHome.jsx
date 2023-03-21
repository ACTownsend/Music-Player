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
  }, []);
  return (
    <div className="w-full p-6 flex items-center justify-evenly flex-wrap">

      {/* prettier-ignore */}
      <DashboardCard name={"Songs"} count={allSongs?.length > 0 ? allSongs?.length : 0}>Songs</DashboardCard>

      {/* prettier-ignore */}
      <DashboardCard name={"Artists"} count={allArtists?.length > 0 ? allArtists?.length : 0}>Artists</DashboardCard>

      {/* prettier-ignore */}
      <DashboardCard name={"Albums"} count={allAlbums?.length > 0 ? allAlbums?.length : 0} >Albums</DashboardCard>
    </div>
  );
};

export default DashBoardHome;