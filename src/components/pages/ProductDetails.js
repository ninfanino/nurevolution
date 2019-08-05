import React from 'react'
import Header from '../general/Header';
import Footer from '../general/Footer';
import ProductInfo from '../collections/productInfo';


const ProductDetails = (props) => {
    const line = props.match.params.name
    return(
        <div>
            <Header/>
            <ProductInfo line={line}/>
            <Footer/>
        </div>
    )
}

export default ProductDetails