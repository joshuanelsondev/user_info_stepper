// App
import { useState } from 'react'
import UserModal from './components/UserModal'
import './App.scss'

function App() {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)

  return (
    <main>
      {!modalVisibility ? (
        <button onClick={() => setModalVisibility(true)}>Add User</button>
      ) : (
        <UserModal setModalVisibility={setModalVisibility} />
      )}
    </main>
  )
}

export default App
