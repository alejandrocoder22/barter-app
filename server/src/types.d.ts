export interface User {
  id?: int
  userName: string
  password: string
  email: string
}

export interface Product {
  id?: int
  productName: string
  userId: int
  estimatedValue: number
  status: string
  imageUrl: string
  category: string
  description: string
  location: string

}

export interface Error {
  message: string
}
