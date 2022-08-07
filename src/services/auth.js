const baseUrl = 'http://localhost:3030/user';

export const login = async (username, password) => {
    const res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    return res.json();
};