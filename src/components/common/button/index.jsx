
import './style.css'

export default function Button({ children, type, onClick, onChange, className, style }) {

    return <button
        className={`ui-button ui-button-${type} ${className}`}
        onClick={onClick}
        onChange={onChange}
        style={style}
    >
        {children}
    </button>
}