import { get, patch } from "./requester";

const baseUrl = 'http://localhost:3030/articles';

export const getBestSellers = async () => {
    return get(`${baseUrl}/most-liked`);
}

export const getArticleById = async (articleId) => {
    return get(`${baseUrl}/${articleId}`);
}

export const edit = (articleId, data) => {
    console.log(articleId, data);
    return patch(`${baseUrl}/${articleId}`, data);
}