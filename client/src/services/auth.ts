
export const loginUser = async (userName, password) => {
  return await fetch('/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userName,
      password
    })
  })
}

export const logOutUser = (setUserContext, navigate) => {
  fetch('/api/users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => {
    setUserContext(null)
  }).catch(error => console.log(error)).finally(
    navigate('/')

  )
}

export const updateUserInfo = async (e, form) => {
  e.preventDefault()
  const petition = await fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  }
  )
  const response = await petition.json()
  console.log(response)
}
