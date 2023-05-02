import React from 'react'
import TitleWrapper from '../global/TitleWrapper';
import ProductGridWrapper from '../global/ProductGridWrapper';
export default function HomeCollectionList({ section, homeStyle, imageGrid, titleAlignment }) {
    const { title, products } = section
    return (
        <section className={homeStyle.home_collection_list}>
            <div className='container'>
                <TitleWrapper title={title} showSubHeading={true} />
                <ProductGridWrapper titleAlignment={titleAlignment} imageGrid={imageGrid} style={homeStyle} products={products} />
            </div>
        </section>
    )
}
