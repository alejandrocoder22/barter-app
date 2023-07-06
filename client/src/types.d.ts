export interface IProduct {
  id: number
  productName: string
  user: string
  userId: number
  estimatedValue: number
  status: string
  description: string
  location: string
  imageUrl: string
  category: string
  createdAy?: string
  updatedAt?: string
}

export interface ILike {
  id: number
  productId: number
  userId: number
}
