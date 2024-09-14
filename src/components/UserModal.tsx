// UserModal
import { useState } from 'react'
import AgeForm from './AgeForm'
import NameForm from './NameForm'
import ReviewUserInfo from './ReviewUserInfo'

interface UserModalProp {
  setModalVisibility: (visibility: boolean) => void
}

export default function UserModal({ setModalVisibility }: UserModalProp) {
  const [formView, setFormView] = useState<string>('name')
  return (
    <div id="user-modal">
      {formView === 'name' ? (
        <NameForm setFormView={setFormView} />
      ) : formView === 'age' ? (
        <AgeForm setFormView={setFormView} />
      ) : (
        <ReviewUserInfo setFormView={setFormView} />
      )}
      <button onClick={() => setModalVisibility(false)}>Close</button>
    </div>
  )
}
