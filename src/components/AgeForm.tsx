// AgeForm

interface AgeFormProps {
  setFormView: (formView: string) => void
}

export default function AgeForm({ setFormView }: AgeFormProps) {
  return (
    <form>
      <label htmlFor="age">What is your age?</label>
      <input type="age" />

      <button onClick={() => setFormView('name')}>Back</button>
      <button onClick={() => setFormView('review')}>Next</button>
    </form>
  )
}
