import { useState } from 'react'
import set from './utils/DButils'

function useIndexDB() {
  const [state, setState] = useState('')
  const setDB = (key, value) => {
    console.log('--->', key, value)
    setState([key, value])
    return set(key, value)
  }
  return [state, setDB]
}
export default useIndexDB
