// ReviewUserInfo

interface ReviewUserInfoProps {
  formView: string
  setFormView: (formView: string) => void
}

export default function ReviewUserInfo({
  formView,
  setFormView,
}: ReviewUserInfoProps) {
  return (
    <>
      {formView == 'review' && (
        <div>
          <p>Review User Info</p>
          <button onClick={() => setFormView('age')}>Back</button>
          <button>Finish</button>
        </div>
      )}
    </>
  )
}
