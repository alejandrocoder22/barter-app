
import { GrPersonalComputer } from 'react-icons/gr'
import { GiClothes, GiStoneCrafting } from 'react-icons/gi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { AiTwotoneHome, AiFillCar } from 'react-icons/ai'
import { BsFillFilterSquareFill } from 'react-icons/bs'

export const categories: Array<{ name: string, icon: SVGAElement }> = [
  { name: 'all', icon: BsFillFilterSquareFill },
  { name: 'furnitures', icon: AiTwotoneHome },
  { name: 'electronics', icon: GrPersonalComputer },
  { name: 'clothes', icon: GiClothes },
  { name: 'crafts', icon: GiStoneCrafting },
  { name: 'car', icon: AiFillCar },
  { name: 'other', icon: HiOutlineDotsHorizontal }
]
