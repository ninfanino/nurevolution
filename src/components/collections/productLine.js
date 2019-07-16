import React from 'react'

const ProductLine = () => {
    const collection = [
        { name:'Product Name'},
        { name:'Product Name'},
        { name:'Product Name'},
        { name:'Product Name'},
        { name:'Product Name'},
        { name:'Product Name'},
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
                <img src="/images/product-home1.jpg" className="imgProductGrid" alt="Product Line" />
                <div className="collectionGridName">
                    { item['name'] }
                </div>
            </div>
        )
    })
    
    return(
        <div className="promos">
            <img className="img-slidder" src="/images/slidder1.jpg" alt="NuRevolution" />

            <div className="container">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis gravida blandit. Proin molestie finibus felis, quis placerat erat volutpat nec. Praesent ultricies enim aliquam, ullamcorper ex id, convallis augue. In dui purus, gravida sit amet ante gravida, ultricies eleifend quam. Aenean rhoncus eros nunc, sit amet viverra sapien hendrerit cursus. Morbi et scelerisque sem, eget vulputate metus. Sed sem urna, porttitor id tortor nec, eleifend egestas neque.
                </p>

                <div className="title">Collections</div>
                <div className="collectionGrid">
                    {itemsCollection}
                </div>
            </div>

            
        </div>
    )
}

export default ProductLine