// ReviewUserInfo

import { User } from '../types/User'

interface ReviewUserInfoProps {
  setFormView: (formView: string) => void
  userInfo: User
}

export default function ReviewUserInfo({ setFormView }: ReviewUserInfoProps) {
  return (
    <div>
      <p>Review User Info</p>
      <button onClick={() => setFormView('age')}>Back</button>
      <button>Finish</button>
    </div>
  )
}
