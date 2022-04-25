import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

export const query = graphql`
  query SanityEpisode($id: String!) {
    sanityEpisode(id: {eq: $id}) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
    }
  }
`
export default function SanityEpisode ({ data }) {
  const episode = data.sanityEpisode

  return (
    <Layout>
      <h1>{episode.title}</h1>
      <p>{episode.description}</p>
    </Layout>
  )
}

