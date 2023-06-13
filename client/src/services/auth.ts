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
