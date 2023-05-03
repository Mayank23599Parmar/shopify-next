import HomeCollectionGrid from "@/components/home/HomeCollectionGrid";
import style from "../styles/index.module.scss"
import HomeCollectionList from "@/components/home/HomeCollectionList";
import HomeFeatureCollection from "@/components/home/HomeFeatureCollection";
import HomeImageWithText from "@/components/home/HomeImageWithText";
//effe
import { client } from "@/utils/apollo-client";
import { gql } from "@apollo/client";
import HomeAsSeenInSection from "@/components/home/HomeAsSeenInSection";
import HomeSlider from "@/components/home/HomeSlider";

export default function Home({ homeData }) {
  const homePageData = []
  for (const [key, value] of Object.entries(homeData)) {
    if (value) {
      homePageData.push({ ...value, type: key })
    } else {
      homePageData.push({ type: key })
    }
  }
  return <div className={style.home_page}>
    {
      homePageData.map((section, index) => {
        switch (section.type) {
          case "section1":
            return (
              <HomeSlider
                key={index}
                homeStyle={style}
                section={section}
                position="left_center"
                btnBg="white"
                textAligment="text-left"
              />
            );
          case "section2":
            return (
              <HomeCollectionList
                key={index}
                homeStyle={style}
                section={section}
                imageGrid={"w-25"}
              />
            );
          case "section3":
            return (
              <HomeFeatureCollection
                key={index}
                homeStyle={style}
                section={section}
                imageGrid={"w-50"}
                shopNow={true}
              />
            );
          case "section4":
            return (
              <HomeSlider
                key={index}
                homeStyle={style}
                section={section}
                position="right_bottom"
                btnBg="black"
                textAligment="text-center"
                background={true}
              />
            );
          case "section5":
            return (
              <HomeImageWithText
                key={index}
                homeStyle={style}
                section={section}
              />
            );
          case "section6":
            return (
              <HomeSlider
                key={index}
                homeStyle={style}
                section={section}
                position="center_center"
                btnBg="black"
                textAligment="text-center"
              />
            );
          case "section7":
            return (
              <HomeCollectionList
                key={index}
                homeStyle={style}
                section={section}
                imageGrid={"w-25"}
              />
            );
          case "section8":
            return (
              <HomeCollectionList
                key={index}
                homeStyle={style}
                section={section}
                imageGrid={"w-16"}
                titleAlignment="left"
              />
            );
          case "section9":
            return (
              <HomeCollectionGrid
                key={index}
                homeStyle={style}
                section={section}
              />
            );
          case "section10":
            return (
              <HomeAsSeenInSection
                key={index}
                homeStyle={style}
                section={section}
              />
            );
          case "section11":
            return (
              <HomeCollectionGrid
                key={index}
                homeStyle={style}
                section={section}
              />
            );
          default:
            return null;
        }
      })
    }
  </div>
}
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Collection(
        $section_1: String
        $section_2: String
        $section_3: String
        $section_4: String
        $section_5: String
        $section_6: String
        $section_7: String
        $section_8: String
        $section_9: String
        $section_10:String
        $section_11:String
        ) {
       section1: collection(handle: $section_1) {
              title
              image {
                altText
                height
                url
                width
              }
              products(first: 4) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }

  section2: collection(handle: $section_2) {
              title
              description
              image {
                altText
                height
                url
                width
              }
              products(first: 4) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }


  section3: collection(handle: $section_3) {
              title
              image {
                altText
                height
                url
                width
              }
              products(first: 4) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }


  section4: collection(handle: $section_4) {
              title
              description
              handle
              image {
                altText
                height
                url
                width
              }
              products(first: 4) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }



  section5: collection(handle: $section_5) {
              title
              description
              image {
                altText
                height
                url
                width
              }
              products(first: 4) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }


  section6: collection(handle: $section_6) {
              title
              description
              image {
                altText
                height
                url
                width
              }
              products(first: 4) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }



  section7: collection(handle: $section_7) {
              title
              image {
                altText
                height
                url
                width
              }
              products(first: 4) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }

  section8: collection(handle: $section_8) {
              title
              image {
                altText
                height
                url
                width
              }
              products(first: 6) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }

  section9: collection(handle: $section_9) {
              title
              image {
                altText
                height
                url
                width
              }
              products(first: 2) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }

  section10: collection(handle: $section_10) {
              title
              image {
                altText
                height
                url
                width
              }
              products(first: 2) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }
  section11: collection(handle: $section_11) {
              title
              image {
                altText
                height
                url
                width
              }
              products(first: 2) {
                nodes {
                  availableForSale
                  description
                  featuredImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  handle
                  title
                }
              }
  }
      }
    `,
    variables: {
      section_1: "women",
      section_2: "women",
      section_3: "vans",
      section_4: "women",
      section_5: "vans",
      section_6: "adidas",
      section_7: "vans",
      section_8: "vans",
      section_9: "vans",
      section_10: "",
      section_11: "kid"

    },
  });
  return {
    props: {
      homeData: data,
    },
  };
}