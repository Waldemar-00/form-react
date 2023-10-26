import useInputValidation from '../hooks/useInputValidtion'
const SomeForm = () => {
  const { isValidate, inputStyle, checkTouch, checkValidation } = useInputValidation()
  return (
    <form>
      <div className="control-group">
        <div className={inputStyle}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onFocus={(e) => checkTouch(e)}
            onBlur={(e) => checkValidation(e)}
          />
        </div>
        <div className={inputStyle}>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            onFocus={(e) => checkTouch(e)}
            onBlur={(e) => checkValidation(e)}
          />
        </div>
        <div className={inputStyle}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            onFocus={(e) => checkTouch(e)}
            onBlur={(e) => checkValidation(e)}
          />
        </div>
        <div className="form-actions">
          <button disabled={!isValidate}>Submit</button>
        </div>
      </div>
    </form>
  ) 
} 

export default SomeForm 
