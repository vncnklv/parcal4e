const request = async (url, method = 'GET', body) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        }
    }

    if (body) options.body = JSON.stringify(body);

    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) options.headers['X-Authorization'] = userData.token;

    const res = await fetch(url, options);

    if (!res.ok) {
        const text = await res.text();
        throw JSON.parse(text);
    }

    return res.json();
}

export const get = (url) => request(url); 
export const post = (url, body) => request(url, 'POST', body); 
export const patch = (url, body) => request(url, 'PATCH', body); 
export const del = (url) => request(url, "DELETE"); 