
const AuthField = ({ handleForm, labelName, inputName, inputType = 'text' }) => {
  return (
    <>
      <label>{labelName}</label>
      <input className='rounded-md p-1 border-2' onChange={handleForm} type={inputType} name={inputName} />
    </>
  )
}

export default AuthField
