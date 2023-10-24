import { useState } from 'react'
const SomeInput = () => {
  const [name, setName] = useState('')
  const [isNameValid, setIsNameValid] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [isValidNameInput, setIsValidNameInput] = useState(false)
  function changeTouch() {
    setIsTouch(true)
  }
  function blurValidate(e) {
    if (e.target.value.length < 3) {
      setIsValidNameInput(true)
      setIsNameValid(true)
    } else {
      setIsValidNameInput(false)
    }
  }
  function changeName(e) {
    setName(e.target.value.trim())
    setIsValidNameInput(false)
    if (e.target.value.trim().length > 0) setIsNameValid(false) // or use useRef
    else setIsNameValid(true)
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

  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isTouchEmail, setIsTouchEmail] = useState(false)
  const [isValidEmailInput, setIsValidEmailInput] = useState(false)
  function changeTouchEmail() {
    setIsTouchEmail(true)
  }
  function blurValidateEmail(e) {
    if (e.target.value.length < 3 || !e.target.value.includes('@')) {
      setIsValidEmailInput(true)
      setIsValidEmail(true)
    } else {
      setIsValidEmailInput(false)
    }
  }
  function changeEmail(e) {
    setEmail(e.target.value.trim())
    setIsValidNameInput(false)
    if (e.target.value.trim().length > 0) setIsValidEmail(false)
    else setIsValidEmail(true)
  }
  const inputClassEmail = !isValidEmail || !isTouchEmail ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className={ inputClass }>
        <label htmlFor="name">Enter your Name</label>
        <input type="text"
          id="name"
          value={name}
          onFocus={(e) => changeTouch(e)}
          onBlur={(e) => blurValidate(e)}
          onInput={(e) => changeName(e)} />
      </div>
      {isNameValid && isTouch && <p className="error-text">Enter Name, at least three characters!!!</p>}
      <div className={ inputClassEmail }>
        <label htmlFor="email">Enter your Email</label>
        <input type="email"
          id="email"
          value={email}
          onFocus={(e) => changeTouchEmail(e)}
          onBlur={(e) => blurValidateEmail(e)}
          onInput={(e) => changeEmail(e)} />
      </div>
      {isValidEmail && isTouchEmail && <p className="error-text">Enter Email, don't forget '@'!!!</p>}
      <div className="form-actions">
        <button disabled={isValidNameInput || isValidEmailInput}>Отправить</button>
      </div>
    </form>
  ) 
} 
export default SomeInput 
