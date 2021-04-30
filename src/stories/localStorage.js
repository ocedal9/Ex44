import React from 'react'
import useLocalStorage from './Hooks/useLocalStorage'

const LScomponent = () => {
  const [item, setItem] = useLocalStorage()

  const handleSetItem = (e) => {
    e.preventDefault()
    setItem(e.target.key.value, e.target.value.value)
  }
  return (
    <div>
      <form onSubmit={handleSetItem}>
        <label>
          Key:
          <input name='key' placeholder={'Type Something'} />
        </label>
        <label>
          Value:
          <input name='value' placeholder={'Type Something'} />
        </label>
        <button type='submit'>Save in Local Storage</button>
      </form>
      <p>
        {item
          ? `Key: ${item[0]}, Value: ${item[1]}; saved on Local Storage.`
          : 'fill key and value and click save'}
      </p>
    </div>
  )
}

export default LScomponent
