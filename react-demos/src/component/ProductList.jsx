import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
    ];
    const mappedProducts = products.map(({id , name, price})=>{
        return <div key = {id}>
            <h1>{name}</h1>
            <h1>{price}</h1>


        </div>
    })
    return (
    <div>{mappedProducts}</div>
    )
}

export default ProductList