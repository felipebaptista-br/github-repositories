'use client'

import './style.css'

export default function Loader({ active }) {

    if (active) {
        return <div className='ui-loader' />
    }
}