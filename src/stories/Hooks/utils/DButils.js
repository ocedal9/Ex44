const DBAccess = new Promise((resolve, reject) => {
  const request = window.indexedDB.open('DB', 1)
  request.onerror = () => reject(request.error)
  request.onsuccess = () => resolve(request.result)
  request.onupgradeneeded = () => request.result.createObjectStore('data')
})
const set = async function (key, value) {
  const db = await DBAccess
  const transaction = db.transaction('data', 'readwrite')
  const store = transaction.objectStore('data')

  return new Promise((resolve, reject) => {
    const req = store.put(value, key)
    transaction.oncomplete = () => resolve(req)
    transaction.onabort = transaction.onerror = () => reject(transaction.error)
  })
}
export default set
