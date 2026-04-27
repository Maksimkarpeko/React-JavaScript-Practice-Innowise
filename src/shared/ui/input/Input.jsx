import style from "./InputStyle.module.css"

export const Input = ({
  type,
  name,
  placeholder,
  isRequired = false,
  value,
  onChange
}) => {
  return <input 
    type={type} 
    name={name} 
    required={isRequired} 
    className={style.input} 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange}
  />
}