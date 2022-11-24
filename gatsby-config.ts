import type { GatsbyConfig } from "gatsby";

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}` // or '.env'
});
// // And then you can use the config in gatsby-config.js
const config = require('gatsby-plugin-config').default;

const gatsbyConfig: GatsbyConfig = {
  pathPrefix:
  process.env.NODE_ENV === 'development' ? `` : `/cws/new-ui`,
  siteMetadata: {
    title: `Ansible test`,
    description: ``,
    author: `---`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components"]
};

module.exports = gatsbyConfig;

