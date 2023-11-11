import './style.css'

export default function Input({ value, placeholder, className, style, type, disabled, onChange }) {

    return <input
        value={value}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        style={style}
        className={`ui-input ${className}`}
        onChange={onChange}
    />
}