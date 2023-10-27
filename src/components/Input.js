import useInputValidation from '../hooks/useInputValidtion'
export default function Input({ id, type }) {
  const { inputStyle, checkFocus, checkBlur, checkValidation } = useInputValidation()
  return (
    <div className={inputStyle}>
      <label htmlFor={id}>{id[0].toUpperCase() + id.slice(1)}</label>
      <input
        id={id}
        type={type}
        onFocus={(e) =>checkFocus(e)}
        onBlur={(e) =>checkBlur(e)}
        onChange={(e) => checkValidation(e, 0)}
        />
    </div>
  )
}