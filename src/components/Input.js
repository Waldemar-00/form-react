import useInputValidation from '../hooks/useInputValidtion'
export default function Input({ id, type }) {
  const { isValidate, inputStyle, checkFocus, checkBlur, checkValidation } = useInputValidation()
  let content
  switch(id) {
    case 'name':
    case 'surname':
      content = <p>Enter more than two characters!</p>
      break
    case 'email': 
      content = <p>Enter more than two characters<br/> And Don't forget '@'!</p>
      break
    default: return
  }
  return (
    <div className={inputStyle}>
      <label htmlFor={id}>{id[0].toUpperCase() + id.slice(1)}</label>
      <input
        id={id}
        type={type}
        onFocus={(e) => checkFocus(e)}
        onBlur={(e) => checkBlur(e)}
        onChange={(e) => checkValidation(e, 0)}
      />
      { !isValidate && content }
    </div>
  )
}