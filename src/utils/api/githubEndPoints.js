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

// get repository - input: user-name, repo-name
const getRepo = async (user, repo) => {
    let response

    await api.get(`/repos/${user}/${repo}`).then((res) => {
        response = res.data
    }).catch((err) => {
        response = err
    })

    return response
}

const getLangsRepo = async (user, repo) => {
    let response

    await api.get(`/repos/${user}/${repo}/languages`).then((res) => {
        response = res.data
    }).catch((err) => {
        response = err
    })

    return response
}

const getCommitsRepo = async (user, repo) => {
    let response

    await api.get(`/repos/${user}/${repo}/commits`).then((res) => {
        response = res.data
    }).catch((err) => {
        response = err
    })

    return response
}

// export all functions
export {
    getUser,
    getRepositories,
    getRepo,
    getLangsRepo,
    getCommitsRepo
};