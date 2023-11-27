const getParam = () => {
    const param = window.location.pathname
    return param
}

const getRepoName = () => {
    const param = window.location.pathname.replace('/dashboard/','')
    return param
}

export { getParam, getRepoName }