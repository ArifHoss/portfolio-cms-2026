require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `A modern portfolio website showcasing my projects and skills.`,
    author: `@portfolio`,
    siteUrl: `https://portfolio.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST || `cdn.contentful.com`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    // Manifest plugin - uncomment when you add src/images/icon.png
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Portfolio`,
    //     short_name: `Portfolio`,
    //     start_url: `/`,
    //     background_color: `#0d0d0d`,
    //     theme_color: `#ed7410`,
    //     display: `minimal-ui`,
    //     icon: `src/images/icon.png`,
    //   },
    // },
  ],
}

