import * as React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'

export default function PostLayout({ children, pageContext}) {
  console.log(pageContext)
  const { title, description } = pageContext.frontmatter
  console.log('title----', title)
  return (
    <Layout
      title={title}
      description={description}
    >
      {children}
    </Layout>
  )
}
