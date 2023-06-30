
const AuthField = ({ handleForm, labelName, inputName }) => {
  return (
    <>
      <label>{labelName}</label>
      <input className='rounded-md p-1 border-2' onChange={handleForm} type='text' name={inputName} />
    </>
  )
}

export default AuthField
