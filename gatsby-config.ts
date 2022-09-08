import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `iTrans`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-anchor-links`,

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/itrans-images/iTrans.svg",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `preworks`,
    //     path: `${__dirname}/preworks`,
    //   },
    // },
    // "gatsby-plugin-mdx",
  ],
};

export default config;
