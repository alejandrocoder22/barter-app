import { categories } from '../data/categories'
const CategoriesMenu = ({ setCategory, category }) => {
  const onSetCategory = ({ target: { textContent } }) => {
    setCategory(textContent)
  }

  return (
    <ul className='flex justify-center gap-2 mt-2'>
      {categories.map(categoryItem => {
        return <li key={categoryItem} onClick={onSetCategory} className={`capitalize cursor-pointer ${category === categoryItem ? 'text-blue-500' : ''}`}>{categoryItem}</li>
      })}
    </ul>
  )
}

export default CategoriesMenu
