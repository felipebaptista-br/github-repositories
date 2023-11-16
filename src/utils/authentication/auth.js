'use client'

import { useRouter } from 'next/navigation'
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

const authLoginNavigation = () => {
    const router = useRouter()

    if (!authLogin) {
        return router.push('/')
    } else {
        return true
    }
}

export { authLogin, authLoginNavigation };