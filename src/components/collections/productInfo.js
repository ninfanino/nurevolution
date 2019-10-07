import React from 'react'


const ProductInfo = (props) => {
    const { line, collection } = props;
    const collections =  {
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
            'dipping-power' : {
                'magical-magnetic' : {
                    descripcion: 'Create a mystical light-catching Magical Magnetic effects that shifts colors under the change of light attracting all the attention',
                    class: 'der',
                    rows: 4,
                    cols: 2,
                    names : [
                        'MM 11 charmed',
                        'MM 12 mystic',
                        'MM 13 moonglow',
                        'MM 14 sorcery',
                        'MM 15 divine',
                        'MM 16 bewitched',
                        'MM 17 illusion',
                        'MM 18 dazed',
                    ]
                },
                'twinkle' : {
                    descripcion: 'Believe in the power of glitter and sparkle up those nails with your favorite Twinkle Collection',
                    class: 'izq',
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
                },
                'high-voltage' : {
                    descripcion: 'Surge through the High Voltage Collection as you create your bold and neon designs by dipping or sculpting with these fine powders. These bright colors are sure to turn heads and catch a lot of bring attention!',
                    class: 'der',
                    rows: 4,
                    cols: 3,
                    names : [
                        'HV-01 unplugged',
                        'HV-02 tesla',
                        'HV-03 heart beat',
                        'HV-04 neon dreams',
                        'HV-05 transformer',
                        'HV-06 electric boom',
                        'HV-07 limewire',
                        'HV-08 kinetic energy',
                        'HV-09 heart acid wash',
                        'HV-10 neon shockwave',
                        'HV-11 sparked!',
                        'HV-12 amp!',
                    ]
                }
            },
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
    
    let itemsCollection = [];
    let k = 0;
    for(let i = 1; i <= collections[line][collection]['rows']; i++) {
        itemsCollection.push(<img src={"/images/product-lines/" + line + "/" + collection + "/" + i + ".jpg"} alt="collection" />);
        for(let j = 1; j <= collections[line][collection]['cols']; j++) {
            itemsCollection.push(<div className="itemName">{ collections[line][collection]['names'][k] }</div>);
            console.log(collections[line][collection]['names'][k]);
            k++;
        }
    }
    
    return(
        <div className="promos">
            <img className="img-slidder" src={"/images/product-lines/" + line + "/" + collection + "/banner.jpg"} alt="collection" />

            <div className="container">
                <video className="inner" controls>
                    <source src={"/images/product-lines/" + line + "/" + collection + "/video.mov"} type="video/mp4" />
                    
                </video>
            </div>    
                <div className="collectionGrid">
                    <div className={collections[line][collection]['class']}>
                        <div className="info">
                            <img className="line-product" src={"/images/product-lines/" + line + "/" + collection + "/logo.jpg"} alt={collection} />
                            { collections[line][collection]['descripcion'] }
                            <div className="rowItems">
                                { itemsCollection }
                            </div>
                        </div> 
           
                        <div className="flyer">
                            <img className="line-product" src={"/images/product-lines/" + line + "/" + collection + "/img.jpg"} alt={collection} />
                        </div>
                    </div>
                </div>

                <div className="btnsContainer">
                    <div className="btnRound">Tutorials</div>

                    <div className="btnRound">Marketing Material</div>
                </div>
            

            
        </div>
    )
}

export default ProductInfo