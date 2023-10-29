import useInputValidation from '../hooks/useInputValidtion'
export default function Input({ id, type, validate }) {
  const { isValidate, inputStyle, checkFocus, checkBlur, checkValidation } = useInputValidation()
  let content
  function returnValidation() {
    switch (id) {
      case 'name':
        content = <p>Enter more than two characters!</p>
        validate(isValidate) 
        break
      case 'surname':
        content = <p>Enter more than two characters!</p>
        validate(isValidate)
        break
      case 'email':
        content = <p>Enter more than two characters<br /> And Don't forget '@'!</p>
        validate(isValidate)
        break
      default: return
    }
    
  }
  returnValidation()
  return (
    <div className={inputStyle}>
      <label htmlFor={id}>{id[0].toUpperCase() + id.slice(1)}</label>
      <input
        id={id}
        type={type}
        onFocus={(e) => checkFocus(e)}
        onBlur={(e) => {
          checkBlur(e)
          returnValidation()
        }}
        onChange={(e) => checkValidation(e, 0)}
      />
      { !isValidate && content }
    </div>
  )
}