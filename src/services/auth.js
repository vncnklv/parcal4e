import { get, post } from "./requester";

const baseUrl = 'http://localhost:3030/user';

export const login = async (username, password) => {
    return post(`${baseUrl}/login`, { username, password });
};

export const logout = async (username, password) => {
    return get(`${baseUrl}/logout`);
};

export const verifyToken = async () => {
    return get(`${baseUrl}/verifyToken`);
};

export const getUserById = (id) => {
    return get(`${baseUrl}/${id}`);
}

export const updateUser = (data) => {
    return post(`${baseUrl}/edit`, data);
}