// UserModal
import { useState } from 'react'
import AgeForm from './AgeForm'
import NameForm from './NameForm'
import ReviewUserInfo from './ReviewUserInfo'

interface UserModalProp {
  setModalVisibility: (visibility: boolean) => void
}

export default function UserModal({ setModalVisibility }: UserModalProp) {
  const [formView, setFormView] = useState<string>('age')
  return (
    <div id="user-modal">
      <NameForm formView={formView} setFormView={setFormView} />
      <AgeForm formView={formView} setFormView={setFormView} />
      <ReviewUserInfo formView={formView} setFormView={setFormView} />
      <button onClick={() => setModalVisibility(false)}>Close</button>
    </div>
  )
}
