import axios from "axios";

const baseURL = "https://oscarsolar-mileinvent-4001.codio-box.uk/";


/**
 * Represents a book.
 * @constructor
 */
export const getAllSongs = async () => {
    try {
        const res = await axios.get(`${baseURL}api/songs/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
}
/**
 * Represents a book.
 * @constructor
 */
export const getAllArtists = async () => {
    try {
       const res =  await axios.get(`${baseURL}api/artist/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
}
/**
 * Represents a book.
 * @constructor
 */
export const getAllAlbums = async () => {
    try {
        const res = await axios.get(`${baseURL}api/albums/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
}
/**
 * Represents a book.
 * @constructor
 */
export const saveNewSong = async (data) => {
    try {
        const res = axios.post(`${baseURL}api/songs/save`, {...data});
        return (await res).data.savedSong;
    } catch (error) {
        return null;
    }
}
/**
 * Represents a book.
 * @constructor
 */
export const saveNewArtist = async (data) => {
    try {
        const res = axios.post(`${baseURL}api/songs/save`, {...data});
        return (await res).data.savedSong;
    } catch (error) {
        return null;
    }
}
/**
 * Represents a book.
 * @constructor
 */
export const saveNewAlbum = async (data) => {
    try {
        const res = axios.post(`${baseURL}api/songs/save`, {...data});
        return (await res).data.savedSong;
    } catch (error) {
        return null;
    }
}