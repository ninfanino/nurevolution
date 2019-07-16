import React from 'react'
import { NavLink } from "react-router-dom";

const Products = () => (
    <div>
        <div className="title">Product Lines</div>
        <div className="productsGrid">
            <NavLink to="/product-line/1">
                <div className="productGridItem">
                    <img src="/images/product-home1.jpg" className="imgProductHome" alt="Gel" />
                    <div className="productMask">
                        <div className="nameProduct">Gel</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/product-line/2">
                <div className="productGridItem">
                    <img src="/images/product-home2.jpg" className="imgProductHome" alt="Gel" />
                    <div className="productMask">
                        <div className="nameProduct">Gel</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/product-line/3">
                <div className="productGridItem">
                    <img src="/images/product-home3.jpg" className="imgProductHome" alt="Gel" />
                    <div className="productMask">
                        <div className="nameProduct">Gel</div>
                    </div>
                </div>
            </NavLink>
        </div>
    </div>
)

export default Products