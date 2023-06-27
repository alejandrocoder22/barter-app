
const SelectCategory = ({ handleForm }) => {
  return (
    <select onChange={handleForm} name='category'>
      <option defaultChecked>Choose an category</option>
      <option value='car'>Car</option>
      <option value='furnitures'>Furnitures</option>
      <option value='electronics'>Electronics</option>
      <option value='clothes'>Clothes</option>
      <option value='crafts'>Crafts</option>
      <option value='other'>Other</option>
    </select>
  )
}

export default SelectCategory
