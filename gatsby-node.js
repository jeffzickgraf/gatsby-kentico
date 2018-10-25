/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `KenticoCloudItemDevice`) {
        var title = node.elements.title.value;
        if(title!=undefined && title!=null && title!="")
        {
            title = title.replace(/\s+/g, '-').toLowerCase();
            //remove parenthesis
            title = title.replace(/["'()]/g,"");
            //remove slash
            var slug  = title.replace(/\//g, "");

            console.log(slug);

            createNodeField({
                node,
                name: `slug`,
                value: slug,
              })
        }        
      }
  }

  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
      graphql(`
      {
        allKenticoCloudItemDevice {
          edges {
            node {              
              fields {
                slug
              }
            }
          }
        }
      }
      `
  ).then(result => {
    result.data.allKenticoCloudItemDevice.edges.forEach(({ node }) => {
        
        if(node.fields===undefined || node.fields === null || node.fields.slug===undefined || node.fields.slug === null)
            return;
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/product-page.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
            
          },
        })
      })
        resolve()
      })
    })
  }
