import React from 'react'

const AuthField = ({ handleForm, labelName, inputName, inputType = 'text' }: { handleForm: React.ChangeEvent<HTMLInputElement>, labelName: string, inputName: string, inputType: string }): React.ReactNode => {
  return (
    <>
      <label>{labelName}</label>
      <input className='rounded-md p-1 border-2' onChange={handleForm} type={inputType} name={inputName} />
    </>
  )
}

export default AuthField
