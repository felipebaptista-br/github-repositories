
import './style.css'

export default function Block({ children, avatar, date }) {

    return (
        <div className='block-main'>
            <p className='block-children'>{children}</p>
            <p className='block-date'>{date}</p>
            <img className='block-avatar' src={avatar} alt="Avatar Github" />
        </div>
    )
}