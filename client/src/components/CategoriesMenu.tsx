
const CategoriesMenu = ({ setCategory, singleCategory }) => {
  const onSetCategory = ({ target: { textContent } }) => {
    setCategory(textContent)
  }
  return (

    <div onClick={onSetCategory} className={`p-3 cursor-pointer flex flex-col justify-center items-center  rounded-full mt-5 mb- ${singleCategory === singleCategory.name ? 'bg-gray-200' : ''}`}>
      <singleCategory.icon iconStyle='cursor-pointer block pointer-events-none' />
      <li className='capitalize cursor-pointer pointer-events-none mt-2 text-gray-500'>{singleCategory.name}</li>
    </div>

  )
}

export default CategoriesMenu
