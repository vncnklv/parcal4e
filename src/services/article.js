import { get, patch, del, post } from "./requester";

const baseUrl = 'http://localhost:3030/articles';

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

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

export const getArticlesByCategory = (category, sorts = {}) => {
    let url = `${baseUrl}?gender=${category}`;

    let sortQueryString;

    if (!isEmpty(sorts))
        sortQueryString = `&sort=${Object.entries(sorts).map(([k, v]) => `${k}-${v}`).join(',')}`;

    if (sortQueryString) url += sortQueryString;

    return get(url);
}