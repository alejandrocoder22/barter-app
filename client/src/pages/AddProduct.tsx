import React, { useState } from "react"

const AddProduct = () => {


  const [productName, setProductName] = useState('')
  const [estimatedValue, setEstimatedValue] = useState(0)
  const [status, setStatus] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [category, setCategory] = useState('')


  const handleLogin = (e) => {
    e.preventDefault()
    fetch('/api/products', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        productName,
        estimatedValue,
        status,
        imageUrl,
        category
      })
    })
  }



  return (
    <main className="min-h-screen ">
    <div className="flex flex-col gap-3 min-h-screen justify-center items-center item bg-cyan-50">
        <form onSubmit={handleLogin} className="flex flex-col max-w-xs gap-2">
            <label>Product Name</label>
            <input onChange={(e) => setProductName(e.target.value) } className="border-2" type='text'></input>
            <label>Estimated Value</label>
            <input onChange={(e) => setEstimatedValue(e.target.value) } className="border-2" type='text'></input>
            <label>State</label>
            <input onChange={(e) => setStatus(e.target.value) } className="border-2" type='text'></input>
            <label>Image</label>
            <input onChange={(e) => setImageUrl(e.target.value) } className="border-2" type='text'></input>
            <label>Category</label>
            <input onChange={(e) => setCategory(e.target.value) } className="border-2" type='text'></input>
            <button className="bg-indigo-500 mt-2 p-2" type="submit">Login</button>
        </form>
    </div>
    </main>
  )
}

export default AddProduct