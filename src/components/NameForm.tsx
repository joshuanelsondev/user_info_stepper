// NameForm

import { User } from '../types/User'

interface NameFormProps {
  setFormView: (formView: string) => void
  userInfo: User
}

export default function NameForm({ setFormView }: NameFormProps) {
  return (
    <form>
      <label htmlFor="first_name">What is your first name?</label>
      <input type="text" id="first_name" />

      <label htmlFor="last_name">What is your last name?</label>
      <input type="text" id="last_name" />

      <button disabled>Back</button>
      <button onClick={() => setFormView('age')}>Next</button>
    </form>
  )
}
