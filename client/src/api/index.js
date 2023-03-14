import axios from "axios";

const baseURL = "https://oscarsolar-mileinvent-4001.codio-box.uk/"



export const getAllSongs = async () => {
    try {
        await axios.get(`${baseURL}/api/songs/getSongs`)
        return res.data;
    } catch (error) {
        return null;
    }
}