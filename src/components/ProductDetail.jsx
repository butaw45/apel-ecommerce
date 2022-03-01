import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data'

const ProductDetail = () => {
    const prodid = useParams()
    const proDetail = Data.filter(x => x.id == prodid.id)
    const product = proDetail[0]
    console.log(product)

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt="" height={400} />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                        <h1 className='display-5 fw-bold'>{product.title}</h1>
                        <hr />
                        <h2 className='my-3'>Rp. {product.price}</h2>
                        <p>{product.desc}</p>
                        <button className='btn btn-outline-primary'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail