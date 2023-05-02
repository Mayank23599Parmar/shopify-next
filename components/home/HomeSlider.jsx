import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import Image from 'next/image';
import { NextIcon, PrevIcon } from '../global/Icon';
const image = [
    "Rectangle 1.png",
    "Rectangle 1 (1).png",
    "Rectangle 1.png",
    "Rectangle 1 (2).png"
]
export default function HomeSlider({ section, homeStyle, background = false, position, btnBg, textAligment }) {
    const { title, products } = section
    return (
        <section className={homeStyle.home_slide}>
            <div className={homeStyle.home_slider_wrapper}>
                <div className="home-slider-prev  active slider-navigation" id={`home-slider-prev`}  >
                    <PrevIcon />
                </div>
                <Swiper
                    effect={"fade"}
                    pagination={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    autoHeight={"auto"}
                    className='home-slide-swiper'
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: `#home-slider-prev`,
                        nextEl: `#home-slider-next`,
                    }}
                >
                    {
                        products.nodes.map((product, index) => {
                            const { featuredImage } = product
                            return <SwiperSlide key={index}>
                                <div className={homeStyle.image_slider}>
                                    <div className={homeStyle.image}>
                                        <Image
                                            src={`/${image[index]}`}
                                            width={featuredImage.width}
                                            height={featuredImage.height}
                                            alt={featuredImage.altText}
                                        />
                                    </div>
                                    <div className={` ${homeStyle.text_wrapper} ${background ? homeStyle.background : ""} ${position} ${textAligment}`}>
                                        <h6 className={homeStyle.title}>{'Share your story'}</h6>
                                        <p className={homeStyle.description}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At phasellus eros.'}</p>
                                        <button className={`btn ${homeStyle.shop_now_btn} ${btnBg == "white" ? "btn-white" : "btn-black"}`}>Shop now</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
                <div className="home-slider-next" id={`home-slider-next-${title}`} >
                    <NextIcon />
                </div>
            </div>
        </section>
    )
}
