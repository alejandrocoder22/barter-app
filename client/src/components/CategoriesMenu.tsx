import { categories } from '../data/categories'

const CategoriesMenu = ({ setCategory, category }) => {
  const onSetCategory = ({ target: { textContent } }) => {
    setCategory(textContent)
  }

  return (
    <ul className='flex justify-center gap-2 mt-2'>
      {categories.map(categoryItem => {
        return (
          <div key={categoryItem.name} className=' flex  flex-col justify-center items-center bg-slate-600 rounded-full'>
            <categoryItem.icon />
            <li onClick={onSetCategory} className={`capitalize cursor-pointer ${category === categoryItem.name ? 'text-blue-500' : ''}`}>{categoryItem.name}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default CategoriesMenu
