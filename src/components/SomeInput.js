import { useState, useRef } from 'react'
const SomeInput = () => {
  const [name, setName] = useState('')
  const nameRef = useRef()
  function changeName(e) {
    setName(e.target.value)
  }
  function submitForm(e) {
    e.preventDefault()
    console.log(nameRef.current.value, name)
  }
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="form-control">
        <label htmlFor="name">Введите Имя</label>
        <input type="text"
          id="name"
          ref={nameRef}
          value={name}
          onInput={(e) => changeName(e)} />
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  ) 
} 

export default SomeInput 
