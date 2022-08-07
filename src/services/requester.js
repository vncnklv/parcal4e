const request = async (url, method = 'GET', body) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        }
    }

    if (body) options.body = JSON.stringify(body);

    const token = localStorage.getItem('user').token;
    if (token) options.headers['X-Authorization'] = token;

    const res = await fetch(url, options);

    if (!res.ok) {

    }

    return res.json();
}

export const get = (url) => request(url); 
export const post = (url, body) => request(url, 'POST', body); 
export const patch = (url, body) => request(url, 'POST', body); 
export const del = (url) => request(url, "DELETE"); 