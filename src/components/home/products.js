import React from 'react'

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

            <div className="productGridItem">
                <img src="/images/product-home2.jpg" className="imgProductHome" alt="Gel" />
                <div className="productMask">
                    <div className="nameProduct">Gel</div>
                </div>
            </div>

            <div className="productGridItem">
                <img src="/images/product-home3.jpg" className="imgProductHome" alt="Gel" />
                <div className="productMask">
                    <div className="nameProduct">Gel</div>
                </div>
            </div>
        </div>
    </div>
)

export default Products