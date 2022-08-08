import { get, patch, del } from "./requester";

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

export const like = (articleId) => {
    return get(`${baseUrl}/${articleId}/like`);
}

export const dislike = (articleId) => {
    return get(`${baseUrl}/${articleId}/dislike`);
}

export const deleteArticle = (articleId) => {
    console.log('hii');
    return del(`${baseUrl}/${articleId}`);
} 