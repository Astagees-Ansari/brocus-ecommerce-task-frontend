import axios from "axios";
import config from "./config";

const axiosInstance = axios.create({
    baseURL: config.serverUrl,
});

export default axiosInstance;