import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const NudeGlow = () => {
    const collections = {
        rows: 3,
        cols: 2,
        names : [
            'ng1 nude-tastic',
            'ng2 birthday suit',
            'ng3 naked',
            'ng4 incognito',
            'ng5 adore',
            'ng6 sensual',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/nude-glow/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/nude-glow/banner.jpg"} alt="collection" />
                <div className="iframe-container">
                    <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/ViGlqDJN96A" title="Nude Glow Collection"></iframe>
                </div>  

                <div className="collectionGrid nudeGlow">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/nude-glow/logo.jpg"} alt="nude-glow" />
                            
                            <div class="gradientNudeGlow">
                                <p>Achieve a timeless day to night glow with our <b>6 Nude Glow shades.</b><br/>
                            Keeping you classy in the AM while also electrifying up your night.</p>
                            </div>
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/nude-glow/img.jpg"} alt="nude-glow" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NudeGlow