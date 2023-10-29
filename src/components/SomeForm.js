import Input from './Input'
import Button from './Button'
import { useState } from 'react'
function SomeForm() {
  console.log('render')
  const [validation, setValidation] = useState()
  function validate(valid) {
    setValidation(validation => validation = valid)
  }
  return (
    <form>
      <div className="control-group">
        <Input type="text" id="name" validate={validate}/>
        <Input type="text" id="surname" validate={validate}/>
        <Input type="email" id="email" validate={validate}/>
        <div className="form-actions">
        <Button disabled={!validation}>Submit</Button>
        </div>
      </div>
    </form>
  ) 
} 
export default SomeForm 
