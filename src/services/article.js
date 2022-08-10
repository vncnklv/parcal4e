import { get, patch, del, post } from "./requester";

const baseUrl = 'http://localhost:3030/articles';

export const getBestSellers = async () => {
    return get(`${baseUrl}/most-liked`);
}

export const getArticleById = async (articleId) => {
    return get(`${baseUrl}/${articleId}`);
}

export const edit = (articleId, data) => {
    return patch(`${baseUrl}/${articleId}`, data);
}

export const create = (data) => {
    return post(baseUrl, data);
}

export const like = (articleId) => {
    return get(`${baseUrl}/${articleId}/like`);
}

export const dislike = (articleId) => {
    return get(`${baseUrl}/${articleId}/dislike`);
}

export const deleteArticle = (articleId) => {
    return del(`${baseUrl}/${articleId}`);
} 