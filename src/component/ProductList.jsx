import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const gettingData = await fetch("http://localhost:8000/products")
        const resultData = await gettingData.json()
        // console.log(resultData);
        setProduct(resultData)
    }
    const deleteProduct = async (id) => {
        // console.log("deleteted", id)        
        const delProducts = await fetch(`http://localhost:8000/product/${id}`, {
            method: "delete",
        })
        const delResult = await delProducts.json()
        if (delResult) {
            alert("deleted")
            //call  getProduct() fun
            getProduct()
        }
        // console.log(delResult);
    }
    const seacrhHandler = async (e) => {
        let key = e.target.value
        if (key) {
            const searchApi = await fetch(`http://localhost:8000/search/${key}`)
            const serchResults = await searchApi.json()
            if (serchResults) {
                setProduct(serchResults)
            }
        }
        else {
            getProduct()
        }
    }
    return (
        <div className='list_cotnatainer'>
            <h1>Product List</h1>
            <input className='search' type="text" placeholder='search Products here...' onChange={seacrhHandler} />
            <ul className='underline'>
                <li className='listtag'>S.NO</li>
                <li className='listtag'>Name</li>
                <li className='listtag'>Price</li>
                <li className='listtag'>Category</li>
                <li className='listtag'>Operation</li>
            </ul>
            {product.length > 0 ? product.map((item, id) => (
                <ul key={item.id}>
                    <li className='listtag'>{id + 1}</li>
                    <li className='listtag'>{item.name}</li>
                    <li className='listtag'>{item.price}</li>
                    <li className='listtag'>{item.category}</li>
                    <li className='listtag'>
                        <li className='sec'>
                            <button onClick={() => deleteProduct(item._id)} className="deletebtn">delete</button>
                            <Link to={"/update/" + item._id} className='up'>Update</Link>
                        </li>
                    </li>
                </ul>
            ))
                : <h1>No Results  Found...</h1>
            }
        </div >
    )
}

export default ProductList