import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const pageData = data.kenticoCloudItemDevice
  console.log(pageData);
  return (
    <Layout>
      <div>
        <h1>Product Page</h1>
        <div class="product-picture-wrapper">
            <div class="product-picture">{getImage(pageData.elements.product_image)}</div>
        </div>
        <div class="product-desc-wrapper">
            <div class="product-name">{pageData.elements.title.value}</div>
            <div class="product-type" dangerouslySetInnerHTML={renderUnsafeHtml(pageData.elements.description.value)} />
            <div class="product-price">${pageData.elements.price.value}</div>            
            <br/>
            <div class="content" dangerouslySetInnerHTML={renderUnsafeHtml(pageData.elements.content.value)} />                              
            <div class="product-specification">
                <h5>Product Specs</h5>
                <div dangerouslySetInnerHTML={renderUnsafeHtml(pageData.elements.specifications.value)} />
            </div>
        </div>
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
  query($slug: String!) {
    kenticoCloudItemDevice(
        fields: { 
            slug: { eq: $slug } 
        }) 
        {
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
                specifications{value}
            }
        }
    }  
  `