import Input from './Input'
import Button from './Button'
import { useState } from 'react'

function SomeForm() {
  const [validation_1, setValidation_1] = useState(true)
  const [validation_2, setValidation_2] = useState(true)
  const [validation_3, setValidation_3] = useState(true)
  function validate(isValidate, id) {
    switch (id) {
      case 'name':
        setValidation_1(validation_1 => validation_1 = !isValidate)
        break
      case 'surname': 
        setValidation_2(validation_2 => validation_2 = !isValidate)
        break
      case 'email':
        setValidation_3(validation_3 => validation_3 = !isValidate)
        break
      default: return
    }
  }
  return (
    <form>
      <div className="control-group">
        <Input type="text" id="name" validate={validate}/>
        <Input type="text" id="surname" validate={validate}/>
        <Input type="email" id="email" validate={validate}/>
        <div className="form-actions">
          <Button disabled={validation_1 || validation_2 || validation_3}>Submit</Button>
        </div>
      </div>
    </form>
  ) 
} 
export default SomeForm 
