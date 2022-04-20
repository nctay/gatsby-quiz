// @ts-ignore
exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        crypto: false
      }
    },
    ...(stage === 'build-html' && {
      module: {
        rules: [
          {
            test: /encrypt-storage/,
            use: loaders.null()
          }
        ]
      }
    })
  })
}
