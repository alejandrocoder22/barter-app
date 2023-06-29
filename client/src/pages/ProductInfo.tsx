import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getLikes, getProductById, handleLike } from '../services/products'
import { createConversation } from '../services/chat'
const ProductInfo = ({}) => {
  const [product, setProduct] = useState([])
  const [likes, setLikes] = useState([])
  const [isLiked, setIsLiked] = useState(false)

  const { productId } = useParams()

  const navigate = useNavigate()

  const isLikedByUser = () => {
    const allLikes = likes?.map(like => like.productId)
    return allLikes.includes(Number(productId))
  }

  useEffect(() => {
    getProductById(productId, setProduct)
    getLikes(setLikes)
  }, [])

  useEffect(() => {
    setIsLiked(isLikedByUser)
  }, [likes])

  return (
    <section className='flex gap-5 items-center'>
      <div className=''>
        <h1 className='text-4xl font-bold mb-5 '>{product?.productName}</h1>
        <div className='flex gap-2'>
          <p>{product?.status}</p>
          <p>{product?.estimatedValue}</p>
          <p onClick={async () => await handleLike(isLiked, setIsLiked, isLikedByUser, productId)} className={`text-xl cursor-pointer ${isLiked ? 'text-green-500' : ''}`}>Like</p>
        </div>
        <img className='max-w-3xl rounded-2xl' src={`http://localhost:3009/${product?.imageUrl}`} />
        <p className=''>Date Added</p>
        <p className=''>Location</p>
      </div>
      <div className=''>
        <p className=''>User rating</p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias optio quisquam sequi quo quaerat perspiciatis magni similique tempora eveniet, consequatur voluptas corporis reiciendis minus ut ad exercitationem repellat illum!</p>
        <button onClick={async () => await createConversation(product, navigate)} className='text-white font-bold bg-lime-500 p-2 rounded-md'>Send Message</button>
      </div>
    </section>
  )
}

export default ProductInfo
