// ReviewUserInfo
interface ReviewUserInfoProps {
  setFormView: (formView: string) => void
  userInfo: { first_name: string; last_name: string; age: number }
}

export default function ReviewUserInfo({
  setFormView,
  userInfo,
}: ReviewUserInfoProps) {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    userInfo: ReviewUserInfoProps['userInfo']
  ) => {
    e.preventDefault()

    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }
  console.log(userInfo)
  return (
    <form onSubmit={(e) => handleSubmit(e, userInfo)}>
      <p>Review User Info</p>
      <p>
        Name: {userInfo.first_name} {userInfo.last_name}
      </p>
      <p>Age: {userInfo.age}</p>
      <button onClick={() => setFormView('age')}>Back</button>
      <button type="submit">Finish</button>
    </form>
  )
}
