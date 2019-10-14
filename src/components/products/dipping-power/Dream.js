import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const Dream = () => {
    const collections = {
        rows: 3,
        cols: 2,
        names : [
            '37H let\'s get toasty',
            '38H champagne shower',
            '39H time to sparkle',
            '40H drunk in love',
            '41H look good, feel good',
            '42H best wishes',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/dream/" + i + ".jpg"} alt="collection" />);
        for(let j = 1; j <= collections['cols']; j++) {
            itemsCollection.push(<div className="itemName">{ collections['names'][k] }</div>);
            console.log(collections['names'][k]);
            k++;
        }
    }

    return(
        <div>
            <Header/>
            <div className="promos">
                <img className="img-slidder" src={"/images/product-lines/dipping-power/dream/banner.jpg"} alt="collection" />
                

                <div className="collectionGrid">
                    <div className="izq">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/dream/logo.jpg"} alt="dream" />
                            A first ever 3 in 1 collection made for glitter acrylic, glitter dip and holographic buff application.\
Inspired by the night Sky.<br/>
Last up to 3 weeks.<br/>
No damage on natural nails<br/>
Easy Soak off
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/dream/img.jpg"} alt="dream" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Dream