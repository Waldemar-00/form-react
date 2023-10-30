import Input from './Input'
import Button from './Button'
import { useState } from 'react'

function SomeForm() {
  const [validation_1, setValidation_1] = useState(true)
  const [validation_2, setValidation_2] = useState(true)
  const [validation_3, setValidation_3] = useState(true)
  function validate_1(isValidate) {
    setValidation_1(validation_1 => validation_1 = !isValidate)
  }
  function validate_2(isValidate) {
    setValidation_2(validation_2 => validation_2 = !isValidate)
  }
  function validate_3(isValidate) {
    setValidation_3(validation_3 => validation_3 = !isValidate)
  }
  console.log(validation_1, validation_2, validation_3)
  return (
    <form>
      <div className="control-group">
        <Input type="text" id="name" validate_1={validate_1}/>
        <Input type="text" id="surname" validate_2={validate_2}/>
        <Input type="email" id="email" validate_3={validate_3}/>
        <div className="form-actions">
          <Button disabled={validation_1 || validation_2 || validation_3}>Submit</Button>
        </div>
      </div>
    </form>
  ) 
} 
export default SomeForm 
