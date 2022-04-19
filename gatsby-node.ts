// @ts-ignore
exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        crypto: false
      }
    }
  })
}
