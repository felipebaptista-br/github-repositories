
const verifyError = async (value) => {
    let result
    
    if (value === 'AxiosError') {
        result = true
    } else {
        result = false
    }

    return result
}

export { verifyError };