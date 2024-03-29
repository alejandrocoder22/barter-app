import { useState } from 'react'
import useForm from '../hooks/useForm'
import { addProduct } from '../services/products'
import SelectCategory from '../components/SelectCategory'

const AddProduct = () => {
  const [file, setFile] = useState(null)

  const { handleForm, form } = useForm()

  return (
    <div className='flex flex-col  justify-center items-center item '>
      <form onSubmit={async (e) => await addProduct(e, form, file)} className='flex flex-col max-w-xs gap-1'>
        <label>Product Name</label>
        <input onChange={handleForm} className='border-2' type='text' name='productName' />
        <label>Estimated Value</label>
        <input onChange={handleForm} className='border-2' type='number' name='estimatedValue' />
        <label>State</label>
        <select className='border-2' onChange={handleForm} name='status'>
          <option defaultChecked>Choose a state</option>
          <option value='secondhand'>Segunda mano</option>
          <option value='new'>Nuevo</option>
        </select>
        <label>Image</label>
        <input onChange={(e) => setFile(e.target.files[0])} className='border-2' type='file' accept='image/*' />
        <label>Category</label>
        <SelectCategory handleForm={handleForm} />
        <label>Location</label>
        <input onChange={handleForm} className='border-2' type='text' name='location' />
        <label>Description</label>
        <textarea onChange={handleForm} className='border-2' name='description' />
        <button className='bg-indigo-500 mt-2 p-2 hover:bg-indigo-400' type='submit'>Add product</button>
      </form>
    </div>
  )
}

export default AddProduct
