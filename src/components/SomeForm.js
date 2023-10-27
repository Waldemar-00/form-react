import Input from './Input'
const SomeForm = () => {
  return (
    <form>
      <div className="control-group">
        <Input type="text" id="name" />
        <Input type="text" id="surname" />
        <Input type="email" id="email" />
        <div className="form-actions">
          <button disabled={true}>Submit</button>
        </div>
      </div>
    </form>
  ) 
} 

export default SomeForm 
