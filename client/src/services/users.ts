export const uploadProfileImage = (e: any) => {
  const formData = new FormData()

  formData.append('profileImage', e.target.files[0])

  fetch('/api/users/image', {
    method: 'POST',
    body: formData
  })
}
