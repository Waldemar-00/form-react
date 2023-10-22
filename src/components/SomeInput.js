import { useState, useRef } from 'react'
const SomeInput = () => {
  const [name, setName] = useState('')
  const inputRef = useRef()
  const [isNameValid, setIsNameValid] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  function changeTouch() {
    setIsTouch(true)
  }
  function blurValidate() {
    if (name.length < 1) {
      setIsNameValid(true)
    }
  }
  function changeName(e) {
    setName(e.target.value.trim())
    if (inputRef.current.value.length > 2) setIsNameValid(false)
    else setIsNameValid(true)
  }
  function submitForm(e) {
    e.preventDefault()
    setIsTouch(true)
    if (name.trim() === '') {
      setIsNameValid(true)
      return
    }
    setIsNameValid(false)
    setName('')
  }
  const inputClass = !isNameValid || !isTouch ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className={inputClass}>
        <label htmlFor="name">Enter your Name</label>
        <input type="text"
          id="name"
          ref={inputRef}
          value={name}
          onFocus={(e) => changeTouch(e)}
          onBlur={blurValidate}
          onInput={(e) => changeName(e)} />
      </div>
      { isNameValid && isTouch && <p className="error-text">Enter your Name, more than three sign!!!</p> }
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  ) 
} 

export default SomeInput 
