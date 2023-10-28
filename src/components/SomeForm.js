import Input from './Input'
import Button from './Button'
import useInputValidtion from '../hooks/useInputValidtion'
function SomeForm() {
  const { returnValidate } = useInputValidtion()
  let isValidate = returnValidate()
  return (
    <form onSubmit={() => localStorage.clear()}>
      <div className="control-group">
        <Input type="text" id="name" />
        <Input type="text" id="surname" />
        <Input type="email" id="email" />
        <div className="form-actions">
        <Button disabled={isValidate} >Submit</Button>
        </div>
      </div>
    </form>
  ) 
} 
export default SomeForm 
