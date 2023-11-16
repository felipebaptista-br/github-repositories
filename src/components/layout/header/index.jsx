'use client'

import { useRouter } from 'next/navigation'
import { getItem, setItem } from '@/utils/storage/localStorage'
import { DiGithubBadge, DiGithubFull } from 'react-icons/di'
import { IoMdLogOut } from 'react-icons/io'
import Image from 'next/image'
import Profile from '@/assets/profile.png'

import './style.css'

export default function Header() {
    const router = useRouter()
    const user = getItem('auth')

    const logout = async () => {
        setItem('auth', null)
        router.push('/')
    }

    if (user) {
        return (
            <header className='header-main'>
                <div className='header-content'>
                    <section className='header-logo'>
                        <DiGithubBadge
                            color='#FFFFFF'
                            size={40}
                        />
                        <DiGithubFull
                            color='#FFFFFF'
                            size={55}
                        />
                    </section>
                    <section className='header-user'>
                        <p>Olá, {user.name ? user.name : 'Perfil sem Nome'}</p>
                        <Image src={user.avatar_url ? user.avatar_url : <Profile />} alt='AVATAR GITHUB' />
                        <IoMdLogOut
                            onClick={() => logout()}
                            cursor='pointer'
                            size={30}
                            color='#FFFFFF'
                        />
                    </section>
                </div>
            </header>
        )
    }
}