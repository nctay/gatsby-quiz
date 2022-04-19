const Layout = require('./src/components/Layout')

const React = require('react')
require('normalize.css/normalize.css')
require('./src/styles/main.css')
exports.wrapPageElement = ({ element, props }) => {
  return <Layout.Layout {...props}>{element}</Layout.Layout>
}
