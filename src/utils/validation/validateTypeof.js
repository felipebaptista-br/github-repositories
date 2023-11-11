
const validateTypeof = () => {
    let result

    if (typeof window !== 'undefined') {
        result = true
    }
    else {
        result = false
    }

    return result
}

export { validateTypeof };