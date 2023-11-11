
const validate = async (value) => {
    let result = false

    if (value !== null && value !== undefined && value !== '') {
        result = true
    }

    return result
}

export { validate }; 