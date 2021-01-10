import { Card} from 'react-bootstrap'
import React from 'react'

const Product = () => {
    return (
        <Card className='my-3 py-3 rounded'>
             <a href={`/product/${product._id}`}>
                 <Card.Img></Card.Img>
             </a>
        </Card>
    )
}

export default Product
