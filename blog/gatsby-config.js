module.exports = {
  siteMetadata: {
    title: `gatsby-remark-related-posts sample blog`,
    author: {
      name: `sititou70`,
      summary: `gatsby-remark-related-posts developer`,
    },
    description: `gatsby-remark-related-posts sample blog`,
    siteUrl: `https://github.com/sititou70/gatsby-remark-related-posts`,
    social: {
      twitter: `sititou70`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-remark-related-posts`,
      options: {
        target_node: "StrapiArticle",
        getMarkdown: node => node.content,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        collectionTypes: ["article"],
        queryLimit: 100,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
