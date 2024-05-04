import axios from "axios";

axios.defaults.baseURL = 'https://moments-drf-api-rs-34ce7500817a.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();