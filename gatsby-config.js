module.exports = {
  siteMetadata: {
    title: 'Kentico Cloud / Gatsby',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
      resolve: `gatsby-source-kentico-cloud`,
        options:{
          kcDeliveryEndpointUrl: "https://deliver.kenticocloud.com",
          kcProjectId: "34b491b4-c966-0045-dcf1-a81e969da44b",
          kcLanguageCodenames: [
            "default",
            "de-EN",
          ],
          queryConfig: {
            usePreviewMode: false,
          },
      },
    },
    'gatsby-plugin-offline',
  ],
}
