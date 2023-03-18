export const actionType = {
    SET_ALL_ARTISTS : "SET_ALL_ARTISTS",
    SET_ALL_ALBUMS : "SET_ALL_ALBUMS",
    SET_ALL_SONGS : "SET_ALL_SONGS",
    SET_FILTER_TERM: "SET_FILTER_TERM",
    SET_ARTIST_FILTER: "SET_ARTIST_FILTER",
    SET_ALBUM_FILTER: "SET_ALBUM_FILTER",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.SET_ALL_ALBUMS:
            
            return {
                ...state,
                allAlbums : action.allAlbums,
            }
        case actionType.SET_ALL_ARTISTS:
            
            return {
                ...state,
                allArtists : action.allArtists,
            }
        case actionType.SET_ALL_SONGS:
            
            return {
                ...state,
                allSongs : action.allSongs,
            }
/////////////////////////////////////////////////////
        case actionType.SET_ALBUM_FILTER:
        
            return {
                ...state,
                albumFilter : action.albumFilter,
            }

        case actionType.SET_FILTER_TERM:
    
            return {
                ...state,
                filterTerm : action.filterTerm,
            }

        case actionType.SET_ARTIST_FILTER:

            return {
                ...state,
                artistFilter : action.artistFilter,
            }

        default:
            return state;
    }

}


export default reducer;