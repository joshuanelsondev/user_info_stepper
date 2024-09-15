// AgeForm
interface AgeFormProps {
  setFormView: (formView: string) => void
  userInfo: { age: number }
  updateUserInfo: (field: 'age', value: number) => void
}

export default function AgeForm({
  setFormView,
  userInfo,
  updateUserInfo,
}: AgeFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    updateUserInfo('age', Number(value))
  }
  return (
    <div>
      <label htmlFor="age">What is your age?</label>
      <input type="age" value={userInfo.age} onChange={handleChange} />

      <button onClick={() => setFormView('name')}>Back</button>
      <button onClick={() => setFormView('review')}>Next</button>
    </div>
  )
}
