import Input from './Input'
import Button from './Button'
import { useState } from 'react'
function SomeForm() {
  const [array, setArray] = useState([true])
  let isDisabled = true
  function validate(arr) {
    return setArray(array => [...array, ...arr])
  }
  for (let i of array) {
      console.log(i)
      if (i === false) isDisabled = false
    }
  console.log(isDisabled, array)
  return (
    <form onSubmit={() => localStorage.clear()}>
      <div className="control-group">
        <Input type="text" id="name" validate={validate}/>
        <Input type="text" id="surname" validate={validate}/>
        <Input type="email" id="email" validate={validate}/>
        <div className="form-actions">
          <Button disabled={isDisabled}>Submit</Button>
        </div>
      </div>
    </form>
  ) 
} 
export default SomeForm 
