import { useState } from 'react'
import useForm from '../hooks/useForm'
import { addProduct } from '../services/products'

const AddProduct = () => {
  const [file, setFile] = useState(null)

  const { handleForm, form } = useForm()

  return (
    <main className='min-h-screen '>
      <div className='flex flex-col min-h-screen justify-center items-center item '>
        <form onSubmit={async (e) => await addProduct(e, form, file)} className='flex flex-col max-w-xs gap-1'>
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
            <option value='car'>Car</option>
            <option value='furnitures'>Furnitures</option>
            <option value='electronics'>Electronics</option>
            <option value='clothes'>Clothes</option>
            <option value='crafts'>Crafts</option>
            <option value='other'>Other</option>
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
