import React from 'react'
import TitleWrapper from '../global/TitleWrapper'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeCollectionGrid({ section, homeStyle }) {
    const { title, products } = section
    return (
        <section className={homeStyle.collection_grid}>
            <div className='container'>
                <TitleWrapper title={title} showSubHeading={true} />
                <div className={homeStyle.collection_grid_wrapper}>
                    {
                        products.nodes.map((product, index) => {
                            const { featuredImage } = product
                            return <Link href={`/product/${product.handle}`} className={`${homeStyle.product} w-50`} key={`product-${index}`}>
                                <div className='image'>
                                    <Image
                                        src={featuredImage.url}
                                        width={featuredImage.width}
                                        height={featuredImage.height}
                                        alt={product.title}
                                        priority
                                    />
                                </div>
                                <div className={homeStyle.text_wrapper}>
                                    <p className={homeStyle.title}>{product.title}</p>
                                    <p className={homeStyle.desctiption}>{product.description}</p>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
