import useForm from '../hooks/useForm'
import { useState, useEffect } from 'react'
import { getProductById } from '../services/products'
import { useParams } from 'react-router-dom'
const UpdatedProduct: React.FC = () => {
  const { form, handleForm } = useForm()
  const [file, setFile] = useState()
  const [product, setProduct] = useState()

  const { productId } = useParams()

  useEffect(() => {
    getProductById(Number(productId), setProduct)
  }, [productId])

  console.log(product)

  return (
    <main className='min-h-screen '>
      <div className='flex flex-col min-h-screen justify-center items-center item '>
        <form className='flex flex-col max-w-xs gap-1'>
          <label>Product Name</label>
          <input value={product.productName} onChange={handleForm} className='border-2' type='text' name='productName' />
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
          <label>Location</label>
          <input onChange={handleForm} className='border-2' type='text' name='location' />
          <label>Description</label>
          <textarea onChange={handleForm} className='border-2' name='description' />
          <button className='bg-indigo-500 mt-2 p-2 hover:bg-indigo-400' type='submit'>Update product</button>
        </form>
      </div>
    </main>
  )
}

export default UpdatedProduct
