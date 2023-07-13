import React, { useState } from 'react'

const useForm = (initialState = {}): object => {
  const [form, setForm] = useState(initialState)

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return { handleForm, form }
}

export default useForm
