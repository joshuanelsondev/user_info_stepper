// AgeForm

interface AgeFormProps {
  formView: string
  setFormView: (formView: string) => void
}

export default function AgeForm({ formView, setFormView }: AgeFormProps) {
  return (
    <>
      {formView == 'age' && (
        <form>
          <label htmlFor="age">What is your age?</label>
          <input type="age" />

          <button onClick={() => setFormView('name')}>Back</button>
          <button onClick={() => setFormView('review')}>Next</button>
        </form>
      )}
    </>
  )
}
