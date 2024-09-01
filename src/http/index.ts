import axios, { AxiosInstance } from "axios";
import UserService from "../service/userService";

export const API_URL = 'https://jsonplaceholder.typicode.com';

const $api: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

const userService = new UserService($api);

export default userService;