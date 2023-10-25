const API_BASE_URL = "https://api.noroff.dev";

async function loginUser() {
    try {
        const postData = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url, postData);
        const json = await response.json();

        if(response.status === 200) {
            return json
        } else {
            throw new Error('Login failed');
        }
    } catch(error) {
        throw error;
    }
};