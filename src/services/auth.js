import { get, post } from "./requester";

const baseUrl = 'http://localhost:3030/user';

export const login = async (username, password) => {
    return post(`${baseUrl}/login`, { username, password });
};

export const logout = async (username, password) => {
    return get(`${baseUrl}/logout`);
};