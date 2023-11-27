'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { objectMapKeys, objectMapValues } from '@/utils/helpers/variables';
import { Doughnut } from 'react-chartjs-2';
import { getRepoName } from '@/utils/helpers/params'
import { getCommitsRepo, getLangsRepo, getRepo } from '@/utils/api/githubEndPoints'
import { getItem } from '@/utils/storage/localStorage'
import { verifyError } from '@/utils/helpers/axiosError'
import { formatedIso } from '@/utils/helpers/dateFormated'
import { GoCheck } from "react-icons/go"
import { FaCode } from "react-icons/fa"
import Block from '@/components/ui/block';
import Button from '@/components/common/button'
import Link from 'next/link'
import 'chart.js/auto';

import './style.css'

export default function Repository() {
    const router = useRouter()
    const [repo, setRepo] = useState()
    const [langs, setLangs] = useState()
    const [commits, setCommits] = useState()
    const [clone, setClone] = useState(false)
    const user = getItem('auth')

    useEffect(() => {
        const repoName = getRepoName()

        const fetchRepositories = async () => {
            const res = await getRepo(user.login, repoName)
            if (verifyError(res)) {
                setRepo(res)
            } else {
                router.push('/dashboard')
            }
        }

        const fetchLanguages = async () => {
            const res = await getLangsRepo(user.login, repoName)
            if (verifyError(res)) {
                setLangs(res)
            }
        }

        const fetchCommits = async () => {
            const res = await getCommitsRepo(user.login, repoName)
            if (verifyError(res)) {
                setCommits(res)
            }
        }

        fetchRepositories()
        fetchLanguages()
        fetchCommits()
    }, [])

    const handleCloneRepo = async () => {
        setClone(true)
        navigator.clipboard.writeText(repo.clone_url)
        setTimeout(() => {
            setClone(false)
        }, 1000);
    }

    if (repo) {
        return (
            <main className='repo-main'>
                <div className='repo-content'>
                    <section className='repo-content-info'>
                        <h2>{repo.name}</h2>
                        <p>{repo.description ? repo.description : 'Sem descrição'}</p>
                        <article className='repo-content-space'>
                            <p>Página Web:</p>
                            {repo.homepage ? <Link className='repo-content-homepage' href={repo.homepage}>{repo.homepage}</Link> : 'Não contém'}
                        </article>
                        <article className='repo-content-space'>
                            <p>Data de Criação:</p>
                            {repo.created_at ? formatedIso(repo.created_at) : 'Não contém'}
                        </article>
                        <article className='repo-content-space'>
                            <p>Data da última modificação:</p>
                            {repo.updated_at ? formatedIso(repo.updated_at) : 'Não contém'}
                        </article>
                        <article style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            margin: '30px 0'
                        }} className='repo-content-space'>
                            <h3>Linguagens</h3>
                            <div style={{
                                margin: '20px 10px'
                            }}>
                                {langs ? Object.keys(langs).map((lang) => (
                                    <div className='repo-content-langs'>
                                        <FaCode size={20} color='#ffd062' />
                                        <p>{lang}</p>
                                    </div>
                                )) : 'Nenhuma Linguagem atribuída'}
                                <Doughnut className='repo-graphic' data={{
                                    labels: langs ? objectMapKeys(langs) : '',
                                    datasets: [
                                        {
                                            label: 'Número de Linhas no código',
                                            data: langs ? objectMapValues(langs) : '',
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                                'rgba(255, 206, 86, 0.2)',
                                                'rgba(75, 192, 192, 0.2)',
                                                'rgba(153, 102, 255, 0.2)',
                                                'rgba(255, 159, 64, 0.2)',
                                            ],
                                            borderColor: [
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(54, 162, 235, 1)',
                                                'rgba(255, 206, 86, 1)',
                                                'rgba(75, 192, 192, 1)',
                                                'rgba(153, 102, 255, 1)',
                                                'rgba(255, 159, 64, 1)',
                                            ],
                                            borderWidth: 1,
                                        },
                                    ],
                                }} />
                            </div>
                        </article>
                    </section>
                    <section className='repo-content-opt'>
                        <div className='repo-content-buttons'>
                            {!clone ?
                                <Button
                                    type={2}
                                    children='CLONAR'
                                    className='repo-buttons'
                                    onClick={() => handleCloneRepo()}
                                /> :
                                <article style={{
                                    width: '150px',
                                    textAlign: 'center',
                                }}>
                                    <GoCheck
                                        size={40}
                                        color='#60ff7d'
                                    />
                                </article>}
                            <Button
                                type={1}
                                children='ACESSAR NO GIT'
                                className='repo-buttons'
                                style={{
                                    marginLeft: '20px'
                                }}
                                onClick={() => handleCloneRepo()}
                            />
                        </div>
                        <div className='repo-commits'>
                            <h3>Commits realizados</h3>
                            {commits && commits.length ? commits.map((commit) => (
                                <Block
                                    children={commit.commit.message ? commit.commit.message : 'Nenhuma descrição'}
                                    avatar={commit.author ? commit.author.avatar_url : ''}
                                    date={formatedIso(commit.commit.committer.date)}
                                />
                            )) : 'Nenhum commit'}
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}