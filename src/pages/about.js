import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

export const query = graphql`
  query getImage {
    file(name: {eq: "cocktail"}) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`
export default function AboutPage({ data }) {
  console.log('data --', data)
  return (
    <Layout
      title='About page'
      description='This is the about page'
    >
      <GatsbyImage
        image={getImage(data.file)}
        alt='A beuty image'
      />
      <h1>Hello frontend About!</h1>
      <Link to='/'>Back to home</Link>
    </Layout>
  )
}
