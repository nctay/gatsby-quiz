import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `quiz`,
    siteUrl: `https://quiz.inno.tech`
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-image',
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `tracedSVG`,
          backgroundColor: `transparent`,
          breakpoint: [],
          quality: 100,
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
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `tracedSVG`,
          quality: 100,
          breakpoints: [],
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
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps'
    },
    {
      resolve: 'gatsby-plugin-minify'
    }
  ]
}

export default config
