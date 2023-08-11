import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getLikes, getProductById, handleLike } from '../services/products'
import { createConversation } from '../services/chat'
import { ILike, IProduct } from '../types'
const ProductInfo: React.FC = () => {
  const [product, setProduct] = useState<IProduct | null>(null)
  const [likes, setLikes] = useState <ILike[] | []>([])
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const { productId } = useParams()

  const navigate = useNavigate()

  const isLikedByUser = (): boolean => {
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

  const getDaysSinceCreated = (createdDate: string): number => {
    const date = new Date()

    const todayDate = date.toISOString()

    const date1 = new Date(createdDate?.split('T')[0])
    const date2 = new Date(todayDate.split('T')[0])

    return Math.floor((date2 - date1) / (1000 * 3600 * 24))
  }

  return (
    <section className='flex flex-col gap-5 items-center'>
      <div className='flex gap-10'>
        <img className='max-w-3xl rounded-2xl' src={`http://localhost:3009/${product?.imageUrl}`} />
        <div className=''>
          <div className='flex items-center gap-1 w-full justify-between  mb-5 '>
            <div className='flex items-center gap-3'>
              <h1 className='text-4xl font-bold text-[30px] '>{product?.productName}</h1>
              <p className='text-[28px] text-[#3E3B3B]'> {product?.estimatedValue}$</p>
              <p onClick={async () => await handleLike(isLiked, setIsLiked, isLikedByUser, productId)} className={`text-xl cursor-pointer ${isLiked ? 'text-green-500' : ''}`}>Like</p>
            </div>
            <p className=''>{`Added ${getDaysSinceCreated(product?.createdAy)} days ago`}</p>
          </div>
          <p className='leading-7'>{product?.description}</p>
          <div className='flex mt-5 items-center gap-5 justify-between'>
            <div className='flex gap-5'>
              <img className='w-12 rounded-full' src={`http://localhost:3009/${product?.user.profileImg}`} />
              <span>{product?.user.userName}</span>
              <p className=''>{product?.location}</p>
            </div>
            <div className='flex items-center gap-5'>
              <p className=''>{product?.status}</p>
              <button onClick={async () => await createConversation(product, navigate)} className='text-white font-bold bg-lime-500 p-2 rounded-md'>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo
