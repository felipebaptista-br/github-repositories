import { getItem } from '../storage/localStorage'

const authLogin = () => {
    let result
    const auth = getItem('auth')

    if (auth) {
        result = true        
    } else {
        result = false
    }

    return result
}

export { authLogin };