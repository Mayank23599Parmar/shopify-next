import Image from 'next/image'
import React from 'react'
export default function ImageWrapper({ src, width, alt, height, showSoldOutLabel = false }) {
    return (
        <div className='image_wrapper'>
            {
                showSoldOutLabel && <div className='product_soldout'>
                    <span className='soldout'>Sold Out</span>
                </div>
            }
            <div className='image'>
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={alt || "image"}
                    priority
                />
            </div>
        </div>
    )
}
