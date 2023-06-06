import { categories } from '../data/categories'

const CategoriesMenu = ({ setCategory, category }) => {
  const onSetCategory = ({ target: { textContent } }) => {
    setCategory(textContent)
  }

  return (
    <ul className='flex justify-center gap-2 mt-2'>
      {categories.map(categoryItem => {
        return (
          <div onClick={onSetCategory} key={categoryItem.name} className={`p-3 cursor-pointer flex flex-col justify-center items-center  rounded-full mt-5 mb-3 ${category === categoryItem.name ? 'bg-gray-200' : ''}`}>
            <categoryItem.icon className='w-5 h-5 cursor-pointer block pointer-events-none' />
            <li className='capitalize cursor-pointer pointer-events-none  text-gray-500'>{categoryItem.name}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default CategoriesMenu
