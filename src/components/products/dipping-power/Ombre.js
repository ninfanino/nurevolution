import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const Ombre = () => {
    const collections = {
        rows: 4,
        cols: 3,
        names : [
            '105a jasmine',
            '105b rosa',
            '106a sweet pea',
            '106b lotus petal',
            '107a birds of paradise',
            '107b ret hot poker',
            '108a buttercup',
            '108b peony',
            '109a lily of the nile',
            '109b morning glory',
            '110a begonia',
            '110b dhalia',
            
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/ombre/" + i + ".jpg"} alt="collection" />);
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
                

                <div className="collectionGrid">
                    <div className="der">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/ombre/logo.jpg"} alt="ombre" />
                            Dip your nail into the newest color trend of Perfect Ombré
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/ombre/img.jpg"} alt="ombre" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Ombre