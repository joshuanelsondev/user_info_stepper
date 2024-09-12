// NameForm

export default function NameForm() {
  return (
    <form>
      <label htmlFor="first_name">What is your first name?</label>
      <input type="text" id="first_name" />

      <label htmlFor="last_name">What is your last name?</label>
      <input type="text" id="last_name" />

      <button>Back</button>
      <button>Next</button>
    </form>
  )
}
