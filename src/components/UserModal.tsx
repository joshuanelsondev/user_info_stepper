// UserModal
import { useState, useEffect } from 'react'
import AgeForm from './AgeForm'
import NameForm from './NameForm'
import ReviewUserInfo from './ReviewUserInfo'
import { User } from '../types/User'

interface UserModalProp {
  setModalVisibility: (visibility: boolean) => void
}

export default function UserModal({ setModalVisibility }: UserModalProp) {
  const [formView, setFormView] = useState<string>('name')
  const [userInfo, setUserInfo] = useState<User>({
    first_name: '',
    last_name: '',
    age: 0,
  })

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo')
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo))
    }
  }, [])

  const updateUserInfo = (field: keyof User, value: string | number) => {
    setUserInfo({
      ...userInfo,
      [field]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    showResults()
  }

  const showResults = () => {
    console.log(userInfo)
  }

  return (
    <form id="user-form" onSubmit={(e) => handleSubmit(e)}>
      {formView === 'name' ? (
        <NameForm
          setFormView={setFormView}
          userInfo={userInfo}
          updateUserInfo={updateUserInfo}
        />
      ) : formView === 'age' ? (
        <AgeForm
          setFormView={setFormView}
          userInfo={userInfo}
          updateUserInfo={updateUserInfo}
        />
      ) : (
        <ReviewUserInfo setFormView={setFormView} userInfo={userInfo} />
      )}
      <button onClick={() => setModalVisibility(false)}>Close</button>
    </form>
  )
}
