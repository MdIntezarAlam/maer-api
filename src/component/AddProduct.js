import React, { useState } from 'react'


const AddProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setComp] = useState("")
    const [error, setError] = useState("")

    const productSubmit = async () => {

        if (!name || !price || !category || !company) {
            setError(true)
            return false
        }
        // console.log(name, price, category, company)
        const userId = JSON.parse(localStorage.getItem("user"))._id
        // console.log(userId)
        const productData = await fetch("http://localhost:8000/product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                "content-Type": "application/json"
            },
        })
        const productResult = await productData.json()
        console.log(productResult)
    }

    return (
        <div className='addpro'>
            <div className='add_box'>
                <h1 className='addproh'>Add Product</h1>
                <input className='all_input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter product name' />
                {error && !name && <span className='error'>Enter valid Name</span>}
                <input className='all_input' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter product price' />
                {error && !price && <span className='error'>Enter valid price</span>}
                <input className='all_input' type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter product category' />
                {error && !category && <span className='error'>Enter valid category</span>}
                <input className='all_input' type="text" value={company} onChange={(e) => setComp(e.target.value)} placeholder='Enter product company' />
                {error && !company && <span className='error'>Enter valid company</span>}

                <button onClick={productSubmit} className='addPro'>Add Product</button>
            </div>
        </div>
    )
}
export default AddProduct