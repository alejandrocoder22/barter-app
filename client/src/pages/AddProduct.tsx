import { useState } from 'react'

const AddProduct = () => {
  const [productName, setProductName] = useState('')
  const [estimatedValue, setEstimatedValue] = useState('')
  const [status, setStatus] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('productName', productName)
    formData.append('estimatedValue', estimatedValue)
    formData.append('status', status)
    formData.append('category', category)
    formData.append('location', location)
    formData.append('description', description)
    formData.append('productImages', file)

    console.log(formData)
    await fetch('/api/products', {
      method: 'POST',
      body: formData
    })
  }

  return (
    <main className='min-h-screen '>
      <div className='flex flex-col min-h-screen justify-center items-center item bg-cyan-50'>
        <form onSubmit={handleLogin} className='flex flex-col max-w-xs gap-1'>
          <label>Product Name</label>
          <input onChange={(e) => setProductName(e.target.value)} className='border-2' type='text' />
          <label>Estimated Value</label>
          <input onChange={(e) => setEstimatedValue(e.target.value)} className='border-2' type='text' />
          <label>State</label>
          <input onChange={(e) => setStatus(e.target.value)} className='border-2' type='text' />
          <label>Image</label>
          <input onChange={(e) => setFile(e.target.files[0])} className='border-2' type='file' accept='image/*' />
          <label>Category</label>
          <input onChange={(e) => setCategory(e.target.value)} className='border-2' type='text' />
          <label>Location</label>
          <input onChange={(e) => setLocation(e.target.value)} className='border-2' type='text' />
          <label>Description</label>
          <textarea onChange={(e) => setDescription(e.target.value)} className='border-2' />
          <button className='bg-indigo-500 mt-2 p-2 hover:bg-indigo-400' type='submit'>Login</button>
        </form>
      </div>
    </main>
  )
}

export default AddProduct
