// ReviewUserInfo
interface ReviewUserInfoProps {
  setFormView: (formView: string) => void
  userInfo: { first_name: string; last_name: string; age: number }
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
