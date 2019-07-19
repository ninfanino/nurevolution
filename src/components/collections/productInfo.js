import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductInfo = () => {
    const collection = [
        { name:'Product Name'},
        { name:'Product Name'},
        { name:'Product Name'},
        { name:'Product Name'},
        { name:'Product Name'},
        { name:'Product Name'}
    ]

    let itemsCollection = collection.map((item, index) => {
        return (
            <div className="collectionGridItem">
                <NavLink to="/product/1">
                    <img src="/images/product-home1.jpg" className="imgProductGrid" alt="Product Line" />
                    <div className="collectionGridName">
                        { item['name'] }
                    </div>
                </NavLink>
            </div>
        )
    })
    
    return(
        <div className="promos">
            <img className="img-slidder" src="/images/slidder1.jpg" alt="NuRevolution" />

            <div className="container">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>

                <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/Xs6hnsPAAEY?playlist=Xs6hnsPAAEY&amp;iv_load_policy=3&amp;enablejsapi=1&amp;disablekb=1&amp;autoplay=0&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;wmode=transparent&amp;origin=https%3A%2F%2Fwww.nurevolutioninc.com&amp;widgetid=3" id="widget4" ></iframe>
                
                <div className="collectionGrid">
                    {itemsCollection}
                </div>

                <div className="btnsContainer">
                    <div className="btnRound">Tutorials</div>

                    <div className="btnRound">Marketing Material</div>
                </div>
            </div>

            
        </div>
    )
}

export default ProductInfo