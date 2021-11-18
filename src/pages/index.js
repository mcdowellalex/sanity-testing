import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {

  const img = getImage(data.sanityPerson.image.asset)

  return (
    <main>
      <title>Home Page</title>
      <div>
        {data.sanityPerson.name}
      </div>
      <GatsbyImage image={img}/>
    </main>
  )
}

export default IndexPage


export const query = graphql`
  query PersonQuery {
    sanityPerson {
      name
      image {
        asset {
          gatsbyImageData(width:300, fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
`