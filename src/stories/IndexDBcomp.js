import React from 'react'
import useIndexDB from './Hooks/useIndexDB'

const SScomponent = () => {
  const [item, setItem] = useIndexDB()

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
        <button type='submit'>Save in Data Base</button>
      </form>
      <p>
        {item
          ? `Key: ${item[0]}, Value: ${item[1]}; Saved on 'DB' data base, inside 'data' store. Refresh data base to see changes!`
          : 'fill key and value and click save'}
      </p>
    </div>
  )
}

export default SScomponent
