import { useState, useEffect } from 'react'
const SomeInput = () => {
  const [name, setName] = useState('')
  const [isNameValid, setIsNameValid] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [isValidNameInput, setIsValidNameInput] = useState(false)

  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isTouchEmail, setIsTouchEmail] = useState(false)
  const [isValidEmailInput, setIsValidEmailInput] = useState(false)

  useEffect(() => {
    setIsValidNameInput(true)
    setIsValidEmailInput(true)
  }, [])
  function changeTouch(setIsTouch) {
    setIsTouch(true)
  }
  function changeValue(e, setValue, setIsValidValueInput, setIsValueValid) {
    setValue(e.target.value.trim())
    setIsValidValueInput(false)
    if (e.target.value.trim().length > 0) setIsValueValid(false) // or use useRef
    else setIsValueValid(true)
  }
  function blurValidate(e) {
    switch (e.target.id) {
      case 'name':
        if (e.target.value.length < 3) {
        setIsValidNameInput(true)
        setIsNameValid(true)
      } else {
        setIsValidNameInput(false)
      }
        break
      case 'email':
        if (e.target.value.length < 3 || !e.target.value.includes('@')) {
        setIsValidEmailInput(true)
        setIsValidEmail(true)
      } else {
        setIsValidEmailInput(false)
        }
        break
      default: return
    }
  }
  function submitForm(e) {
    e.preventDefault()
    setIsTouch(true)
    if (name === '' || name.length < 3) {
      setIsNameValid(true)
      return
    }
    fetch('https://custom-hooks-firebase-default-rtdb.firebaseio.com/products.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name, email})
      }
    )
    setIsValidNameInput(true)
    setIsNameValid(false)
    setName('')
    setEmail('')
  }
  const inputClass = !isNameValid || !isTouch ? "form-control" : "form-control invalid"
  const inputClassEmail = !isValidEmail || !isTouchEmail ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className={ inputClass }>
        <label htmlFor="name">Enter your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onFocus={() => changeTouch( setIsTouch )}
          onBlur={(e) => blurValidate(e)}
          onInput={(e) => changeValue( e, setName, setIsValidNameInput, setIsNameValid )} />
      </div>
      {isNameValid && isTouch && <p className="error-text">Enter Name, at least three characters!!!</p>}
      <div className={ inputClassEmail }>
        <label htmlFor="email">Enter your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onFocus={() => changeTouch(setIsTouchEmail)}
          onBlur={(e) => blurValidate(e)}
          onInput={(e) => changeValue( e, setEmail, setIsValidNameInput, setIsValidEmail )} />
      </div>
      {isValidEmail && isTouchEmail && <p className="error-text">Enter Email, don't forget '@'!!!</p>}
      <div className="form-actions">
        <button disabled={isValidNameInput || isValidEmailInput}>Отправить</button>
      </div>
    </form>
  ) 
} 
export default SomeInput 
