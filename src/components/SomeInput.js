import { useState } from 'react'
const SomeInput = () => {
  const [name, setName] = useState('')
  const [isNameValid, setIsNameValid] = useState(true)
  function changeName(e) {
    setName(e.target.value)
  }
  function submitForm(e) {
    e.preventDefault()
    if (name.trim() === '') {
      setIsNameValid(false)
      return
    }
    setIsNameValid(true)
    setName('')
  }
  const inputClass = isNameValid ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className={inputClass}>
        <label htmlFor="name">Enter your Name</label>
        <input type="text"
          id="name"
          value={name}
          onInput={(e) => changeName(e)} />
      </div>
      {!isNameValid && <p className="error-text">Enter your Name!!!</p>}
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  ) 
} 

export default SomeInput 
