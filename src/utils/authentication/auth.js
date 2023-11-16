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

const authLoginNavigation = async () => {
    const router = useRouter()

    if (!authLogin) {
        router.push('/')
    }

}

export { authLogin, authLoginNavigation };