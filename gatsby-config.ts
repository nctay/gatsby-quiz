import type { GatsbyConfig } from 'gatsby'

require('dotenv').config({
  path: `.env`
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `quiz`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-image',
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `none`,
          breakpoint: [],
          quality: 100,
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {}
        }
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        quality: 100
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      // @ts-ignore
      __key: 'images'
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: { families: ['Inter:300,500,700'] }
      }
    }
  ]
}

export default config
