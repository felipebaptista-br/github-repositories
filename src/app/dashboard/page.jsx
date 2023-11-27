'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getRepositories } from '@/utils/api/githubEndPoints'
import { getItem } from '@/utils/storage/localStorage'
import { getParam } from '@/utils/helpers/params'
import Card from '@/components/ui/card'
import Loader from '@/components/common/loader'

import './style.css'

export default function Dashboard() {
    const router = useRouter()
    const user = getItem('auth')
    const thisParam = getParam()
    const [repos, setRepos] = useState()

    useEffect(() => {
        const fetchApi = async () => {
            let res = await getRepositories(user.login)
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
                            onClick={() => typeof window !== 'undefined' ? router.push(`${thisParam}/${item.name}`) : undefined}
                        />
                    ))}
                </div>) :
                <div className='dashboard-load-container'>
                    <Loader active />
                </div>}
        </main>
    )
}