import React from 'react'
import ImageWrapper from './ImageWrapper'
import Link from 'next/link'
export default function ProductGridWrapper({ style, products, imageGrid, shopNow = false, titleAlignment = false }) {
  return (
    <div className={style.products_wrapper}>
      {
        products.nodes.map((product, index) => {
          const { featuredImage } = product
          return <div className={`${style.product} ${imageGrid}`} key={index}>
            <ImageWrapper
              src={featuredImage.url}
              width={featuredImage.width}
              height={featuredImage.height}
              alt={featuredImage.altText}
              showSoldOutLabel={!product.availableForSale}

            />
            <div className={style.title_wrapper}>
              {
                shopNow ? <div className={style.show_now_wrapper}>
                  <p className={style.product_title}>{product.title}</p>
                  <Link className={style.product_link} href={`/product/${product.handle}`}>Shop</Link>
                </div> : <Link href={`/product/${product.handle}`} className={`${style.title} ${titleAlignment ? style.titleAlignment : ""}`}>{product.title}</Link>
              }
            </div>
          </div>
        })
      }
    </div>
  )
}
