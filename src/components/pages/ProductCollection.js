import React from 'react'
import Header from '../general/Header';
import Footer from '../general/Footer';
import ProductLine from '../collections/productLine';

const ProductCollection = (props) => {
    const line = props.match.params.name
    return (
        <div>
            <Header/>
            <ProductLine line={line} />
            <Footer/>
        </div>
    )
}

export default ProductCollection