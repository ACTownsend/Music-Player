import axios from "axios";

const baseURL = "https://oscarsolar-mileinvent-4001.codio-box.uk/";



export const getAllSongs = async () => {
    try {
        const res = await axios.get(`${baseURL}api/songs/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
}
export const getAllArtists = async () => {
    try {
       const res =  await axios.get(`${baseURL}api/artist/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
}
export const getAllAlbums = async () => {
    try {
        const res = await axios.get(`${baseURL}api/albums/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
}
export const saveNewSong = async (data) => {
    try {
        const res = axios.post(`${baseURL}api/songs/save`, {...data});
        return (await res).data.savedSong;
    } catch (error) {
        return null;
    }
}
export const saveNewArtist = async (data) => {
    try {
        const res = axios.post(`${baseURL}api/songs/save`, {...data});
        return (await res).data.savedSong;
    } catch (error) {
        return null;
    }
}
export const saveNewAlbum = async (data) => {
    try {
        const res = axios.post(`${baseURL}api/songs/save`, {...data});
        return (await res).data.savedSong;
    } catch (error) {
        return null;
    }
}