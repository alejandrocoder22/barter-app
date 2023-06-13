
const CategoriesMenu = ({ setCategory, singleCategory }) => {
  const onSetCategory = ({ target: { textContent } }) => {
    setCategory(textContent)
  }
  return (

    <div onClick={onSetCategory} className={`p-3 cursor-pointer flex flex-col justify-center items-center  rounded-full mt-5 mb-3 ${singleCategory === singleCategory.name ? 'bg-gray-200' : ''}`}>
      <singleCategory.icon className='w-5 h-5 cursor-pointer block pointer-events-none' />
      <li className='capitalize cursor-pointer pointer-events-none  text-gray-500'>{singleCategory.name}</li>
    </div>

  )
}

export default CategoriesMenu
