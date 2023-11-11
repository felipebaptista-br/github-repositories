import api from "./github"

// get user - input: user-name
const getUser = async (user) => {
    let response

    await api.get(`/users/${user}`).then((res) => {
        response = res.data
    }).catch((err) => {
        response = err
    })

    return response
}

// get repositories - input: user-name
const getRepositories = async (user) => {
    let response

    await api.get(`/users/${user}/repos`).then((res) => {
        response = res.data
    }).catch((err) => {
        response = err
    })

    return response
}

// export all functions
export { getUser, getRepositories };