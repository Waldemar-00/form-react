import useInputValidation from "../hooks/useInputValidtion"
function SomeFormYet() {
  const {
    isValidate: isValidateName,
    inputStyle: inputStyleName,
    checkFocus: checkFocusName,
    checkBlur: checkBlurName,
    checkValidation: checkValidationName
  } = useInputValidation()
  const {
    isValidate: isValidateSurname,
    inputStyle: inputStyleSurname,
    checkFocus: checkFocusSurname,
    checkBlur: checkBlurSurname,
    checkValidation: checkValidationSurname
  } = useInputValidation()
  const {
    isValidate: isValidateEmail,
    inputStyle: inputStyleEmail,
    checkFocus: checkFocusEmail,
    checkBlur: checkBlurEmail,
    checkValidation: checkValidationEmail
  } = useInputValidation()
  const contentName = <p>Enter more than two characters!</p> 
  const contentEmail = <p>Enter more than two characters<br /> And Don't forget '@'!</p>
  let isDisabled = true
  if (isValidateName && isValidateSurname && isValidateEmail) {
    isDisabled = false
  }
  const objectData = {}
  function createDataAfterBlur(e) {
    switch (e.target.id) {
      case 'name': 
        objectData.name = e.target.value
        break
      case 'surname': 
        objectData.surname = e.target.value
        break
      case 'email': 
        objectData.email = e.target.value
        break
      default: return 
    }
  }
  function submitForm(e) {
    e.preventDefault()
    if (objectData.name && objectData.surname && objectData.email) {
      fetch('https://custom-hooks-firebase-default-rtdb.firebaseio.com/products.json', {
        method: 'POST',
        body: JSON.stringify(objectData),
        headers: { 'Content-Type': 'application/json' }
      })
      document.querySelector('form').reset()
    } else return
  }
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="control-group">
        <div className={inputStyleName}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onFocus={(e) => checkFocusName(e)}
            onBlur={(e) => {
              createDataAfterBlur(e)
              checkBlurName(e)
            }}
            onChange={(e) => checkValidationName(e, 0)}
          />
          {!isValidateName && contentName}
        </div>
        <div className={inputStyleSurname}>
          <label htmlFor="name">Surname</label>
          <input
            type="text"
            id="surname"
            onFocus={(e) => checkFocusSurname(e)}
            onBlur={(e) => {
              createDataAfterBlur(e)
              checkBlurSurname(e)
            }}
            onChange={(e) => checkValidationSurname(e, 0)}
          />
          {!isValidateSurname && contentName}
        </div>
      </div>
      <div className={inputStyleEmail}>
        <label htmlFor="name">E-Mail</label>
        <input
          type="email"
          id="email"
          onFocus={(e) => checkFocusEmail(e)}
          onBlur={(e) => {
            createDataAfterBlur(e)
            checkBlurEmail(e)
          }}
          onChange={(e) => checkValidationEmail(e, 0)}
        />
        {!isValidateEmail && contentEmail}
      </div>
      <div className="form-actions">
        <button disabled={isDisabled}>Submit</button>
      </div>
    </form>
  )
}
export default SomeFormYet 