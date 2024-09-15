// NameForm

interface NameFormProps {
  setFormView: (formView: string) => void
  userInfo: { first_name: string; last_name: string }
  updateUserInfo: (field: 'first_name' | 'last_name', value: string) => void
}

export default function NameForm({
  setFormView,
  updateUserInfo,
  userInfo,
}: NameFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    updateUserInfo(id as 'first_name' | 'last_name', value)
  }
  return (
    <div>
      <label htmlFor="first_name">What is your first name?</label>
      <input
        type="text"
        id="first_name"
        value={userInfo.first_name}
        onChange={handleChange}
      />

      <label htmlFor="last_name">What is your last name?</label>
      <input type="text" id="last_name" />

      <button disabled>Back</button>
      <button type="button" onClick={() => setFormView('age')}>
        Next
      </button>
    </div>
  )
}
