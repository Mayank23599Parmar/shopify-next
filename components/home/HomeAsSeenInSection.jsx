import React from 'react'
import TitleWrapper from '../global/TitleWrapper'
import Image from 'next/image'
const image = [
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",
    "Rectangle 7 (2).png",

]
export default function HomeAsSeenInSection({ homeStyle }) {
    return (
        <section className={homeStyle.as_seen_in_section}>
            <div className='container'>
                <TitleWrapper title={"As seen in"} showSubHeading={true} />
                <div className={homeStyle.as_seen_in_section_wrapper}>
                    {
                        image.map((cv, index) => {
                            return <div className="w-16" key={`as_seen_in_section-${index}`}>
                                <Image
                                    src={`/${cv}`}
                                    height={245}
                                    width={245}
                                    alt={"logo"}
                                />
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
