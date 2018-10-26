require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const myQuery = `{
  allKenticoCloudItemDevice {
    edges {
      node {
        id
        elements {
          title {            
            value
          }
          short_description{value}
        }        
      }
    }
  }
}
`;



//Data always undefined here. Data is availavle in both index.js page and gatsby-node.js
//See .filter below that is console.logging title
const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.allKenticoCloudItemDevice.edges
                  .filter(node => {console.log(node.title);if(node.title!=undefined)return true;}).map(({ node }) => 
    ({
      title: node.title.value,
      description: node.short_description.value,      
      objectID: node.id
    })
    ), // optional
    indexName: process.env.ALGOLIA_INDEX_NAME, // overrides main index name, optional
  },
];



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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
          appId: process.env.ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_API_KEY,
          indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
          queries,
          chunkSize: 10000, // default: 1000
        },
      },
  ],
};



