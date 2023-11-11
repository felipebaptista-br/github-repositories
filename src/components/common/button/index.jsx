
import './style.css'

export default function Button({ children, onClick, onChange, className, style }) {

    return <button
        className={`ui-button ${className}`}
        onClick={onClick}
        onChange={onChange}
        style={style}
    >
        {children}
    </button>
}