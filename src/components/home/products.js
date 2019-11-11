import React from 'react'
import { NavLink } from "react-router-dom";

const Products = () => (
    <div>
        <div className="title">Product Lines</div>
        <div className="productsGrid">
            
                <div className="productGridItem">
                    <img src="/images/product-home1.jpg" className="imgProductHome" alt="Gel" />
                    <div className="productMask">
                        <div className="nameProduct">Gel</div>
                    </div>
                </div>
            

            
                <div className="productGridItem"><NavLink to="/product-line/dipping-power">
                    <img src="/images/product-home2.jpg" className="imgProductHome" alt="Dipping Power" />
                    <div className="productMask">
                        <div className="nameProduct">Dipping<br/>power</div>
                    </div></NavLink>
                </div>
            

            
                <div className="productGridItem">
                    <img src="/images/product-home3.jpg" className="imgProductHome" alt="Bare soak" />
                    <div className="productMask">
                        <div className="nameProduct">Bare soak</div>
                    </div>
                </div>
            
        </div>
    </div>
)

export default Products