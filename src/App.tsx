import { useState } from 'react'
import './App.scss'

function App() {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)
  return (
    <main>
      {!modalVisibility ? (
        <button onClick={() => setModalVisibility(true)}>Add User</button>
      ) : (
        <div>
          <p>Modal</p>
          <button onClick={() => setModalVisibility(false)}>Close</button>
        </div>
      )}
    </main>
  )
}

export default App
