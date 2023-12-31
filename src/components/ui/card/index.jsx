'use client'

import { validateCharacter } from '@/utils/validation/validateCharacter'
import Button from '@/components/common/button'

import './style.css'

export default function Card({ title, children, onClick }) {
    const validChildren = validateCharacter(children, 100)

    return (
        <div className='card-main'>
            <section className='card-content'>
                <h3>{title}</h3>
                <p>{children ? validChildren : 'Sem descrição'}</p>
            </section>
            <Button
                type={1}
                children='ACESSAR'
                className='card-button'
                onClick={onClick}
            />
        </div>
    )
}