import React from 'react'
import Header from '../../general/Header';
import Footer from '../../general/Footer';


const HoloChrome = () => {
    const collections = {
        rows: 7,
        cols: 6,
        names : [
            '1H countdown',
            '2H it\'s a celebration',
            '3H midnight city',
            '4H memories',
            '5H times squares',
            '6H confetti',
            '7H fireworks',
            '8H life of the party',
            '9H firecracker',
            '10H party favor',
            '11H happy new year!',
            '12H all-nighter',
            '13H RSVP',
            '14H surprise!',
            '15H happy hour',
            '16H boozed-up',
            '17H blowout',
            '18H hakuna ma\'vodka',
            '19H ball drop',
            '20H i\'ll be there in prosecco',
            '21H sparkling champagne',
            '22H party poppers',
            '23H cocktail',
            '24H time capsule',
            '25H shine bright like a diamond',
            '26H dripping in finesse',
            '27H bling bling',
            '28H queen of bling',
            '29H holo there!',
            '30H shinning diamond',
            '31H holidazed',
            '32H xoxo',
            '33H new york new me!',
            '34H lovers paradise',
            '35H drench me in glitter',
            '36H all that glitters',
            '37H let\'s get toasty',
            '38H Champagne shower',
            '39H time to sparkle',
            '40H drunk in love',
            '41H look good, feel good',
            '42H best wishes',
        ]
    }

    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/holo-chrome/" + i + ".jpg"} alt="collection" />);
        itemsCollection.push(<img src={"/images/product-lines/dipping-power/holo-chrome/" + i + "b.jpg"} alt="collection" />);
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
                <img className="img-slidder" src={"/images/product-lines/dipping-power/holo-chrome/banner.jpg"} alt="collection" />
                
                <div className="collectionGrid expand">
                    <div className="izq">
                        <div className="info">
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/dipping-power/holo-chrome/img.jpg"} alt="holo-chrome" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HoloChrome