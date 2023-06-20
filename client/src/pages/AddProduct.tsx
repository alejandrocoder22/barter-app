import { useState } from 'react'
import useForm from '../hooks/useForm'

const AddProduct = () => {
  const [file, setFile] = useState(null)

  const { handleForm, form } = useForm()
  const handleLogin = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key])
    })
    formData.append('productImages', file)

    const petition = await fetch('/api/products', {
      method: 'POST',
      body: formData
    })

    const response = await petition.json()
  }

  return (
    <main className='min-h-screen '>
      <div className='flex flex-col min-h-screen justify-center items-center item '>
        <form onSubmit={handleLogin} className='flex flex-col max-w-xs gap-1'>
          <label>Product Name</label>
          <input onChange={handleForm} className='border-2' type='text' name='productName' />
          <label>Estimated Value</label>
          <input onChange={handleForm} className='border-2' type='number' name='estimatedValue' />
          <label>State</label>
          <select onChange={handleForm} name='status'>
            <option defaultChecked>Choose a state</option>
            <option value='secondhand'>Segunda mano</option>
            <option value='new'>Nuevo</option>
          </select>
          <label>Image</label>
          <input onChange={(e) => setFile(e.target.files[0])} className='border-2' type='file' accept='image/*' />
          <label>Category</label>
          <select onChange={handleForm} name='category'>
            <option defaultChecked>Choose an category</option>
            <option value='car'>Nuevo</option>
            <option value='other'>Segunda mano</option>
            <option value='furnitures'>Nuevo</option>
            <option value='electronics'>Nuevo</option>
            <option value='clothes'>Nuevo</option>
            <option value='crafts'>Nuevo</option>
          </select>
          <label>Location</label>
          <input onChange={handleForm} className='border-2' type='text' name='location' />
          <label>Description</label>
          <textarea onChange={handleForm} className='border-2' name='description' />
          <button className='bg-indigo-500 mt-2 p-2 hover:bg-indigo-400' type='submit'>Login</button>
        </form>
      </div>
    </main>
  )
}

export default AddProduct
