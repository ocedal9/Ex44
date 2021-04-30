import { useState } from 'react'

function useLocalStorage() {
  const [state, setState] = useState('')
  const setValue = (key, value) => {
    try {
      setState([key, value])
      window.localStorage.setItem(key, value)
    } catch (error) {
      console.log(error)
    }
  }
  return [state, setValue]
}
export default useLocalStorage
