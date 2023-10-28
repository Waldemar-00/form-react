import { useState, useEffect } from 'react'
export default function useInputValidation() {
  const [isValidate, setValidate] = useState(true)
  const [inputStyle, setInputStyle] = useState("form-control") 
  useEffect(() => {
    setInputStyle(inputStyle => inputStyle = isValidate ? "form-control" : "form-control invalid")
  }, [ isValidate ])
  function checkValidation(e, sings) {
    switch (e.target.id) {
      case 'name': 
      case 'surname':
        if (e.target.value.trim().length >= sings) {
          setValidate(isValidate => isValidate = true)
        } else {
          setValidate(isValidate => isValidate = false)
        }
        break
      case 'email': 
        if (e.target.value.trim().length >= sings && sings === 0) {
          setValidate(isValidate => isValidate = true)
        } else if ((e.target.value.trim().length >= sings && sings === 3) && e.target.value.trim().includes('@')) {
          setValidate(isValidate => isValidate = true)
        }
        else {
          setValidate(isValidate => isValidate = false)
        }
        break
        default: return 
    }
  }
  function checkFocus(e) {
    checkValidation(e, 0)
  }
  function checkBlur(e) {
    checkValidation(e, 3)
  }
  function returnValidate() {
    return isValidate
  }
  return {
    isValidate,
    inputStyle,
    checkValidation,
    checkFocus,
    checkBlur,
    returnValidate,
  }
}