import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const UpdateProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setComp] = useState("")
    const params = useParams()
    const navigate= useNavigate()



    useEffect(() => {
        getProduct()
        // updateProduct()
    }, [])

    //get the  data by Id
    const getProduct = async () => {
        // console.log(params);
        const fetchProducts = await fetch(`http://localhost:8000/product/${params.id}`)
        const resultProduct = await fetchProducts.json()
        // console.log(resultProduct);
        setName(resultProduct.name)
        setPrice(resultProduct.price)
        setCategory(resultProduct.category)
        setComp(resultProduct.company)
    }

    //update the products api
    const productSubmit = async () => {
        const updating = await fetch(`http://localhost:8000/product/${params.id}`, {
            method: "put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        const updatingResults = await updating.json()
        // console.log(updatingResults);
        navigate("/")

    }



    // const productSubmit = () => {
    //     console.log(name, price, category, company);
    // }

    return (
        <div className='addpro'>
            <div className='add_box'>
                <h1 className='addproh'>Update Product</h1>
                <input className='all_input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input className='all_input' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter product price' />
                <input className='all_input' type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter product category' />
                <input className='all_input' type="text" value={company} onChange={(e) => setComp(e.target.value)} placeholder='Enter product company' />
                <button onClick={productSubmit} className='addPro'>Add Product</button>
            </div>
        </div>
    )
}
export default UpdateProduct