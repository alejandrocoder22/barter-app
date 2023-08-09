
import { AllProductsIcon, CraftIcon, FurnitureIcon, CarIcon, ClothesIcon, ElectronicIcon, OtherIcon } from '../components/Icons'

export const categories: Array<{ name: string, icon: SVGAElement }> = [
  { name: 'all', icon: AllProductsIcon },
  { name: 'furnitures', icon: FurnitureIcon },
  { name: 'electronics', icon: ElectronicIcon },
  { name: 'clothes', icon: ClothesIcon },
  { name: 'crafts', icon: CraftIcon },
  { name: 'car', icon: CarIcon },
  { name: 'other', icon: OtherIcon }
]
