//dev
const URL_PREFIX = "http://localhost:3002"
//prod
// const URL_PREFIX="https://SimsChallengeTracker.herokuapp.com"

const API = {
    getUserData: async id => {
        const res = await fetch(`${URL_PREFIX}/api/users/${id}`)
        return await res.json()
    },
    isValidToken: async token => {
        const res = await fetch(`${URL_PREFIX}/api/users/isValidToken`, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
        return await res.json()
    },
    login: async userObj => {
        const res = await fetch(`${URL_PREFIX}/api/users/login`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    },
    signup: async userObj => {
        const res = await fetch(`${URL_PREFIX}/api/users`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    },
    getAllPacks: async () => {
        const res = await fetch(`${URL_PREFIX}/api/packs`);
        return await res.json();
    },
    getUserLegacies: async (number, token) => {
        const res = await fetch(`${URL_PREFIX}/api/legacies/userlegacies?limit=${number}`, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        });
        return await res.json();
    }
}

export default API