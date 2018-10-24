module.exports = {
  siteMetadata: {
    title: 'Gatsby starter site with Kentico Cloud',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-kentico-cloud',
      options: {
        kcDeliveryEndpointUrl: 'https://deliver.kenticocloud.com',
        kcProjectId: '34b491b4-c966-0045-dcf1-a81e969da44b',
        kcLanguageCodenames: [
          'default',
        ],
        queryConfig: {
          usePreviewMode: false,
        },
      },
    },
  ],
};
