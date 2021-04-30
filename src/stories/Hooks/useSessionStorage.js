import { useState } from 'react'

function useSessionStorage() {
  const [state, setState] = useState('')

  const setValue = (key, value) => {
    try {
      setState([key, value])
      window.sessionStorage.setItem(key, value)
    } catch (error) {
      console.log(error)
    }
  }

  return [state, setValue]
}
export default useSessionStorage
