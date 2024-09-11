// UserModal
import AgeForm from './AgeForm'
import NameForm from './NameForm'
import ReviewUserInfo from './ReviewUserInfo'

interface UserModalProp {
  setModalVisibility: (visibility: boolean) => void
}

export default function UserModal({ setModalVisibility }: UserModalProp) {
  return (
    <div id="user-modal">
      <AgeForm />
      <NameForm />
      <ReviewUserInfo />
      <button onClick={() => setModalVisibility(false)}>Close</button>
    </div>
  )
}
