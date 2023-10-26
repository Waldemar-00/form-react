import { useState } from 'react'
export default function useInputValidation() {
  const [isValidate, setValidate] = useState(false)
  const [isTouch, setTouch] = useState(false)
  const [inputStyle, setInputStyle] = useState("form-control") 
  function checkValidation(e) {
    switch (e.target.id) {
      case 'name': 
      case 'surname':
        if (e.target.value.length > 0) {
          setValidate(true)
        } else {
          setValidate(false)
        }
        break
      case 'email': 
        if (e.target.value.includes('@')) {
          setValidate(true)
        } else {
          setValidate(false)
        }
        break
        default: return 
    }
  }
  function checkTouch(e) {
    setTouch(true)
    setInputStyle(isValidate && isTouch ? "form-control" : "form-control invalid")
  }
  return {
    isValidate,
    inputStyle,
    checkValidation,
    checkTouch
  }
}