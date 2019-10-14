import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductLine = (props) => {
    const { line } = props
    const collection =  {
            'gel': [
                { 
                    name:'Collections NU-01 Trio',
                    photo: 'collectionsNU-01trio.jpg'
                },
                { 
                    name:'Collections NU-02 Superbase',
                    photo: 'collectionsNU-02superbase.jpg'
                },
                { 
                    name:'Collections NU-03 Supertop',
                    photo: 'collectionsNU-03supertop.jpg'
                },
                { 
                    name:'Collections NU-04 Matte Top Gel',
                    photo: 'collectionsNU-04mattetopgel.jpg'
                },
                { 
                    name:'Collections NU-05 Magic Foil Gel',
                    photo: 'collectionsNU-05magicfoilgel.jpg'
                },
                { 
                    name:'Collections NU-06 Whiteout',
                    photo: 'collectionsNU-06whiteout.jpg'
                },
                { 
                    name:'Collections NU-07 Blackout',
                    photo: 'collectionsNU-07blackout.jpg'
                },
                { 
                    name:'Collections NU-08 Ombre Gel',
                    photo: 'collectionsNU-08ombregel.jpg'
                },
                { 
                    name:'Collections NU-09 Tie Dye',
                    photo: 'collectionsNU-09tiedye.jpg'
                }
            ],
            'dipping-power' : [
                { 
                    name:'Magical Magnetic',
                    photo: 'magical-magnetic.png',
                    url: 'magical-magnetic'
                },
                { 
                    name:'Twinkle',
                    photo: 'twinkle.png',
                    url: 'twinkle'
                },
                { 
                    name:'Diamond',
                    photo: 'diamond.png',
                    url: 'diamond'
                },
                { 
                    name:'High Voltage',
                    photo: 'high-voltage.png',
                    url: 'high-voltage'
                },
                { 
                    name:'Jolly',
                    photo: 'jolly.png',
                    url: 'jolly'
                },
                { 
                    name:'Nudy Nude',
                    photo: 'nudy-nude.png',
                    url: 'nudy-nude'
                },
                { 
                    name:'Opal',
                    photo: 'opal.png',
                    url: 'opal'
                },
                { 
                    name:'Starlet',
                    photo: 'starlet.png',
                    url: 'starlet'
                },
                { 
                    name:'Temperature',
                    photo: 'temperature.png',
                    url: 'temperature'
                },
                { 
                    name:'Solar Glitter',
                    photo: 'solar-glitter.png',
                    url: 'solar-glitter'
                },
                { 
                    name:'Electro Glow',
                    photo: 'electro-glow.png',
                    url: 'electro-glow'
                },
                { 
                    name:'Nude Glow',
                    photo: 'nude-glow.png',
                    url: 'nude-glow'
                },
                { 
                    name:'Holo Chrome',
                    photo: 'holo-chrome.png',
                    url: 'holo-chrome'
                },
                { 
                    name:'Bubble Tea',
                    photo: 'bubble-tea.png',
                    url: 'bubble-tea'
                },
                { 
                    name:'Dream Collection',
                    photo: 'dream.png',
                    url: 'dream'
                },
                { 
                    name:'Lollipop',
                    photo: 'lollipop.png',
                    url: 'lollipop'
                },
                { 
                    name:'Loose Glitter',
                    photo: 'loose-glitter.png',
                    url: 'loose-glitter'
                },
                { 
                    name:'Ombre',
                    photo: 'loose-glitter.png',
                    url: 'ombre'
                },
                { 
                    name:'Pearl',
                    photo: 'pearl.png',
                    url: 'pearl'
                },
                { 
                    name:'Pure Chrome',
                    photo: 'gold-pure.png',
                    url: 'pure-chrome'
                },
                { 
                    name:'Red Soul',
                    photo: 'red-soul.png',
                    url: 'red-soul'
                }
            ],
            'bare-soak' : [
                { 
                    name:'Collections NUbaresoak-01 Baresoak',
                    photo: 'collectionsNUbaresoak-01baresoak.jpg'
                },
                { 
                    name:'Collections NUbaresoak-02 Massage Ointment',
                    photo: 'collectionsNUbaresoak-02massageointment.jpg'
                }
            ]
        }
    
    let itemsCollection = collection[line].map((item, index) => {
        return (
            <div className="collectionGridItem" key={index}>
                <NavLink to={"/product/" + line + "/" + item['url']}>
                    <div className="imgProductGrid">
                        <img src={"/images/product-lines/" + line + "/" + item['photo'] } alt={ item['name'] } />
                    </div>
                    
                    <div className="collectionGridName">
                        { item['name'] }
                    </div>
                </NavLink>
            </div>
        )
    })
    
    return(
        <div className="promos">
            <img className="img-slidder" src={"/images/product-lines/" + line + "/mainimage.jpg"} alt="NuRevolution" />

            <div className="container">
                
                <div className="title">Collections</div>
                <div className="collectionGrid">
                    {itemsCollection}
                </div>
            </div>

            
        </div>
    )
}

export default ProductLine