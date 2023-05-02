import React from 'react'
import TitleWrapper from '../global/TitleWrapper'
import Image from 'next/image'
import ProductGridWrapper from '../global/ProductGridWrapper'

export default function HomeFeatureCollection({ section, homeStyle, imageGrid, shopNow }) {
    const { title, products, image, description } = section
    return (
        <section className={homeStyle.feature_collection}>
            <div className='container'>
                <TitleWrapper title={"Name collection"} />
                <div className={homeStyle.feature_collection_wrapper}>
                    <div className={homeStyle.image}>
                        <div className='img'>
                            <Image
                                src={"/Rectangle 7.png"}
                                width={image.width}
                                height={image.height}
                                alt={image.altText || "image"}
                                priority
                            />
                        </div>
                        <div className={homeStyle.collection_details}>
                            <h6 className={homeStyle.title}>{title}</h6>
                            <div className={homeStyle.description_wrapper}>
                                <p className={homeStyle.description}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non auctor lorem odio pulvinar fermentum ornare. Ut elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non auctor lorem odio pulvinar fermentum ornare. Ut elementum.'}</p>
                                <button className={`${homeStyle.btn} btn`}>Shop now</button>
                            </div>

                        </div>
                    </div>
                    <div className={homeStyle.feature_products}>
                        <ProductGridWrapper shopNow={shopNow} imageGrid={imageGrid} style={homeStyle} products={products} />
                    </div>
                </div>
            </div>
        </section>
    )
}
