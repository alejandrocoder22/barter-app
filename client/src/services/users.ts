export const uploadProfileImage = (e: any) => {
  const formData = new FormData()

  formData.append('profileImage', e.target.files[0])

  fetch('/api/users/image', {
    method: 'POST',
    body: formData
  })
}

export const getUserInfo = async (setUser, authContext) => {
  const petition = await fetch(`/api/users/${authContext.user.userId}`)
  const response = await petition.json()

  setUser(response)
}
