'use client'

import { useEffect, useState } from 'react'
import { getRepositories } from '@/utils/api/githubEndPoints'
import { getItem } from '@/utils/storage/localStorage'
import Card from '@/components/ui/card'
import Loader from '@/components/common/loader'

import './style.css'

export default function Dashboard() {
    const user = getItem('auth')
    const [repos, setRepos] = useState()

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getRepositories(user.login)
            setRepos(res)
        }

        fetchApi()
    }, [])

    return (
        <main className='dashboard-main'>
            <div className='dashboard-panel'>
                <h3>Repositórios encontrados</h3>
                <p>Aqui você pode visualizar, clonar e acessar os repositórios do GitHub.</p>
            </div>
            {repos ? (
                <div className='dashboard-content'>
                    {repos.map((item) => (
                        <Card
                        key={item.id}
                        title={item.name}
                        children={item.description}
                        onClick={() => typeof window !== 'undefined' ? window.location.href = item.html_url : undefined}
                        />
                    ))}
                </div>) :
                <div className='dashboard-load-container'>
                    <Loader active />
                </div>}
        </main>
    )
}