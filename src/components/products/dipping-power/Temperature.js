import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const Temperature = () => {
    const collections = {
        rows: 4,
        cols: 3,
        names : [
            '1 aloha beaches!',
            '2 taki taki!',
            '3 summer magic',
            '4 vacation mode on!',
            '5 chillaxing\'',
            '6 splish splash',
            '7 don\'t forget your spf!',
            '8 seaside daze',
            '9 hideaway',
            '10 let\'s escape',
            '11 go coconuts!',
            '12 sun washed',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/temperature/" + i + ".jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/temperature/banner.jpg"} alt="collection" />
                <div className="iframe-container">
                    <iframe className="inner" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/ViGlqDJN96A" title="Twinkle Collection"></iframe>
                </div> 

                <div className="collectionGrid">
                    <div className="izq">
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/dipping-power/temperature/logo.jpg"} alt="temperature" />
                            Prepare to be amazed and watch the magic happen before your eyes with this irresistibly fun heat activated colo-changing powder effect
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/temperature/img.jpg"} alt="temperature" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Temperature