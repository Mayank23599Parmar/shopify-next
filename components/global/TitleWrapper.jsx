import Link from 'next/link'
import React from 'react'

export default function TitleWrapper({ title, showSubHeading = false, subtitle = false, shopNowBtn = false }) {
    return (
        <div className={"main_title_wrapper"}>
            {
                showSubHeading && <p className={"sub-heading"}>Subheading</p>
            }
            <h5 className={`title ${shopNowBtn && "text-left"}`}>{title}</h5>
            {
                subtitle && <p className={`sub-title ${shopNowBtn && "text-left"}`}>{subtitle}</p>
            }
            {
                shopNowBtn && <Link href={shopNowBtn} className='btn shop-now'>Shop now</Link>
            }
        </div>
    )
}
