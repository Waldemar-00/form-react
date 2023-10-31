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
  return (
    <form>
      <div className="control-group">
        <div className={inputStyleName}>
          <label htmlFor="name">Введите Имя</label>
          <input
            type="text"
            id="name"
            onFocus={(e) => checkFocusName(e)}
            onBlur={(e) => checkBlurName(e)}
            onChange={(e) => checkValidationName(e, 0)}
          />
          {!isValidateName && contentName}
        </div>
        <div className={inputStyleSurname}>
          <label htmlFor="name">Введите Фамилию</label>
          <input
            type="text"
            id="surname"
            onFocus={(e) => checkFocusSurname(e)}
            onBlur={(e) => checkBlurSurname(e)}
            onChange={(e) => checkValidationSurname(e, 0)}
          />
          {!isValidateSurname && contentName}
        </div>
      </div>
      <div className={inputStyleEmail}>
        <label htmlFor="name">Введите E-Mail</label>
        <input
          type="email"
          id="email"
          onFocus={(e) => checkFocusEmail(e)}
          onBlur={(e) => checkBlurEmail(e)}
          onChange={(e) => checkValidationEmail(e, 0)}
        />
        {!isValidateEmail && contentEmail}
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  )
}
export default SomeFormYet 