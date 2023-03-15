import axios from "axios";

const baseURL = "https://oscarsolar-mileinvent-4001.codio-box.uk/";



export const getAllSongs = async () => {
    try {
        const res = await axios.get(`${baseURL}/api/songs/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
}
export const getAllArtists = async () => {
    try {
       const res =  await axios.get(`${baseURL}/api/songs/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
}
export const getAllAlbums = async () => {
    try {
        const res = await axios.get(`${baseURL}/api/songs/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
}