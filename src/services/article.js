const baseUrl = 'http://localhost:3030/articles';

export const getBestSellers = async () => {
    const res = await fetch(`${baseUrl}/most-liked`)
    return res.json();
}

export const getArticleById = async (articleId) => {
    const res = await fetch(`${baseUrl}/${articleId}`);
    return res.json();
}