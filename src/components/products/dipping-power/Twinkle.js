import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const Twinkle = () => {
    const collections = {
        rows: 4,
        cols: 2,
        names : [
            '25 Twinkle',
                        '26 Blaze',
                        '27 Dreamer',
                        '28 Buttercup',
                        '29 Tinsel',
                        '30 Bliss',
                        '31 Merry',
                        '32 Twinkle',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/twinkle/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/twinkle/banner.jpg"} alt="collection" />
                <div className="iframe-container">
                    <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/xY8LErGMOgg" title="Twinkle Collection"></iframe>
                </div> 

                <div className="collectionGrid">
                    <div className="izq">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/twinkle/logo.jpg"} alt="Magical Magnetic" />
                            Believe in the power of <b>glitter and sparkle</b> up those nails with your favorite <b>Twinkle Collection</b>
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/twinkle/img.jpg"} alt="Magical Magnetic" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Twinkle