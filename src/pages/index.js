import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


/*

const IndexPage = ({ data }) => (
  <Layout>
    <h1>IoT Ecommerce Store</h1>
    <p>MEET THE ONLY ALL-IN-ONE IOT PLATFORM ON THE MARKET</p>
    <p>Everything you need to power your IoT product, from device to cloud</p>
    <Link to="/page-2/">Go to page 3</Link>


    
  </Layout>
)

export default IndexPage */


export default ({ data }) => {
  console.log(data)
  return (
      <Layout>
          <div>
              <h1>Devices</h1>
              {data.allKenticoCloudItemDevice.edges.map(({ node }, index) => (
                  <div key={index}>
                      <article class="hit">
                          <div class="product-picture-wrapper">
                              <div class="product-picture">{getImage(node.elements.product_image)}</div>
                          </div>
                          <div class="product-desc-wrapper">
                              <div class="product-name">{node.elements.title.value}</div>
                              <div class="product-type" dangerouslySetInnerHTML={renderUnsafeHtml(node.elements.description.value)} />
                              <div class="product-price">${node.elements.price.value}</div>
                              <div class="description" dangerouslySetInnerHTML={renderUnsafeHtml(node.elements.content.value)} />
                          </div>
                      </article>
                  </div>
              ))}
          </div>
      </Layout>
  )
}

function getImage(productImages){
  if(productImages===null || productImages.length===0 || productImages.value[0] ===undefined || productImages.value[0].url ===undefined)
  {
    return "";
  }
  else
  {
    return <a href={productImages.value[0].url}><img alt='product' src={productImages.value[0].url} /></a>;
  }
}


function renderUnsafeHtml(thehtml) {
  return {__html: thehtml};
}

export const query = graphql`
 {
  allKenticoCloudItemDevice {
    edges {
      node {
        elements{
          title {value}
          description {value}
          price {value}
          content {value}
          product_image{
            value {
              name
              type
              size          
              url
              }
            }
          }
        }
      }
    }
}`