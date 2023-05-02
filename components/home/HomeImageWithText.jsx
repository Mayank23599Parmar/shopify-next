import React from 'react'
import TitleWrapper from '../global/TitleWrapper'
import Image from 'next/image'

export default function HomeImageWithText({ section, homeStyle }) {
    const { title, handle, image, description } = section
    return (
        <section className={homeStyle.image_width_text}>
            <div className='container'>
                <TitleWrapper title={"Lorem Ipsum has been the industry's"} subtitle={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} />
                <div className={homeStyle.image_with_text_wrapper}>
                    <div className={homeStyle.image}>
                        <Image
                            src={"/Rectangle 7 (1).png"}
                            width={765}
                            height={765}
                            alt={"Lorem Ipsum has been the industry's"}
                            priority
                        />
                    </div>
                    <div className={homeStyle.text_wrapper}>
                        <TitleWrapper shopNowBtn={`/collection/${handle}`} title={title} subtitle={description} />
                    </div>
                </div>
            </div>
        </section>
    )
}
