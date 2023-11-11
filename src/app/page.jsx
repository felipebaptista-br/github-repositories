'use client'

import {
  GoChevronRight,
  GoRocket,
  GoFileDirectoryFill,
  GoCode,
  GoVerified
} from 'react-icons/go'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getUser } from '@/utils/api/githubEndPoints'
import { verifyError } from '@/utils/helpers/axiosError'
import { validate } from '@/utils/validation/validate'
import { setItem } from '@/utils/storage/localStorage'
import Input from '@/components/common/input'
import Button from '@/components/common/button'
import Loader from '@/components/common/loader'

import './style.css'

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState()
  const [loader, setLoader] = useState(false)
  const [err, setErr] = useState()

  const submit = async () => {
    setLoader(true)
    const isValid = await validate(user)

    if (isValid) {
      const res = await getUser(user)
      const err = await verifyError(res.name)

      if (!err) {
        setItem('auth', res)
        router.push(`/dashboard`)
      } else {
        setLoader(false)
        setErr('Usuário não encontrado!')
      }
    } else {
      setErr('Preencha o campo!')
      setLoader(false)
    }
  }

  return (
    <main className='home-main'>
      <div className='home-login'>
        <p className='home-gradient'>APLICAÇÃO EXCLUSIVA</p>
        <h1>GitHub Projects</h1>
        <p className='home-description'>Utilize o user-name do GitHub para acessar a plataforma e encontrar repositórios.</p>
        <section className='home-form'>
          <Input
            placeholder='Digite o seu user-name'
            style={{
              width: '65%'
            }}
            onChange={(event) => setUser(event.target.value)}
          />
          {!loader ?
            <Button
              children={
                <>COMEÇAR <GoChevronRight size={25} /></>
              }
              style={{
                width: '35%',
                marginLeft: '5px'
              }}
              className='home-form-gradient'
              onClick={() => submit()}
            /> :
            <article className='home-form-loader-container'>
              <Loader active />
            </article>
          }
        </section>
        <p className={!err ? 'none' : 'home-form-err'}>{err}</p>
      </div>
      <div className='home-footer'>
        <section className='home-footer-item'>
          <article className='home-footer-icon'>
            <GoRocket color='#996DFF' size={20} />
          </article>
          <h3>UI persuasiva e performance</h3>
          <p>Essa aplicação foi construída usando Nextjs 14, e faz conexão com as API's do Github, além de um software performático, tem uma UI inspirada na Rocketseat.
          </p>
        </section>
        <section className='home-footer-item'>
          <article className='home-footer-icon'>
            <GoFileDirectoryFill color='#6DFF6D' size={20} />
          </article>
          <h3>Design Patterns</h3>
          <p>Com os Design Patterns desse projeto, a aplicação se torna mais robusta, escalável e fácil de manter, resultando em uma experiência de desenvolvimento mais eficiente e um produto final mais confiável.</p>
        </section>
        <section className='home-footer-item'>
          <article className='home-footer-icon'>
            <GoCode color='#006AFF' size={20} />
          </article>
          <h3>Open Source</h3>
          <p>Gostou do projeto? Todo o código é Open Source e você pode reaproveitar cada linha! Além disso, pode contar com documentações e suporte em casos de dúvidas.
          </p>
        </section>
        <section className='home-footer-item'>
          <article className='home-footer-icon'>
            <GoVerified color='#FFF953' size={20} />
          </article>
          <h3>Implementação de Testes</h3>
          <p>Toda a plataforma foi testada utilizando E2E com a ferramenta Cypress, e garante qualidade na usabilidade.
          </p>
        </section>
      </div>
    </main>
  )
}
