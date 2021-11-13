import * as React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.strapiArticle
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.title} description={post.content} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
        </header>
        <section itemProp="articleBody">{post.content}</section>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <h2>Related Posts</h2>
        <ol>
          {data.relatedStrapiArticles.posts.slice(0, 3).map(x => (
            <li key={x.strapiId}>
              <Link to={`/${x.strapiId}`}>{x.title}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $strapiId: Int) {
    site {
      siteMetadata {
        title
      }
    }
    strapiArticle(strapiId: { eq: $strapiId }) {
      strapiId
      content
      title
    }
    relatedStrapiArticles(parent: { id: { eq: $id } }) {
      posts {
        title
        strapiId
      }
    }
  }
`
