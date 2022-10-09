import axios from "axios";

export const coreApi = axios.create({
    baseURL:'https://kenziehub.herokuapp.com',
    timeout:15000,
})