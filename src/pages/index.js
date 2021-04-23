import React from "react"
import tw from "twin.macro"
import { graphql } from "gatsby"
import Section from "../components/section"
import Seo from "../components/seo"

const IndexPage = ({
  data: {
    allPrismicSection: { edges: sections },
  },
}) => {
  return (
    <>
      <Seo
        title="Strona Głowna"
        lang="pl"
        description="TZ Transport przewoźnik na którym można polegać, przesyłki drobnicowe, oraz ekspresowe"
      />
      {sections.map(({ node: { data } }) => (
        <Section
          alt={data.image.alt}
          image={data.image.url}
          title={data.title.text}
          reversed={ data.reversed}
        >
          {data.body.text}
        </Section>
      ))}
      
    </>
  )
}

export default IndexPage
export const query = graphql`
  {
    allPrismicSection {
      edges {
        node {
          data {
            body {
              text
            }
            reversed
            image {
              url
              alt
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`
