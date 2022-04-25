import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { imageWrapper } from '../styles/index.module.css'

export default function IndexPage() {
  const posts = useStaticQuery(graphql`
    query MyQuery {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date(fromNow: false, formatString: "MMM DD YYYY")
            description
            title
          }
          id
          slug
        }
      }
      allSanityEpisode(
        sort: { fields: date, order: DESC }
        filter: { youtubeID: {ne: null}}
        limit: 20
      ) {
        nodes {
          id
          title
          _createdAt
          gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
        }
      }
    }
  `)

  console.log('posts -->', posts)

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src='../images/ivana-la-61jg6zviI7I-unsplash.jpg'
          alt='a dog image'
          placeholder='dominantColor'
          width={300}
          height={300}
        />
      </div>
      <h1>Hello frontend masters!</h1>
      <Link to='/about'>Go to about</Link>
      <h2>You can see some post here: </h2>
      <ul>
        {
          posts.allMdx.nodes.map(post => {
            return (
              <li key={post.id}>
                <Link to={post.slug}>
                  {post.frontmatter.title}
                </Link>
                <small> posted {post.frontmatter.date}</small>
              </li>
            )
          })
        }
        {
          posts.allSanityEpisode.nodes.map(episode => {
            return (
              <li key={episode.id}>
                <Link to={episode.gatsbyPath}>
                  {episode.title}
                </Link>
                <small> posted {episode._createdAt} </small>
              </li>
            )
          })
        }
      </ul>
    </Layout>
  )
}