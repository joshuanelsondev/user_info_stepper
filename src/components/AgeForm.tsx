// AgeForm

export default function AgeForm() {
  return (
    <form>
      <label htmlFor="first_name">What is your first name?</label>
      <input type="text" id="first_name" />

      <label htmlFor="last_name">What is your lasts name?</label>
      <input type="text" id="last_name" />

      <button>Back</button>
      <button>Next</button>
    </form>
  )
}
