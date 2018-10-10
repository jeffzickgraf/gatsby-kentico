import React from 'react'
/*import { Link } from 'gatsby'*/
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
        <table>
          <thead>
            <tr>
              <th>Title</th>
              
              <th>Description</th>
              <th>Price</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
              {data.allKenticoCloudItemDevice.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.title.value}</td> 
                  
                  <td>{node.description.value}</td> 
                  <td>{node.price.value}</td> 
                  <td>{node.content.value}</td> 
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}


export const query = graphql`
 {
  allKenticoCloudItemDevice {
    edges {
      node {
        title {value}
        description {value}
        price {value}
        content {value}
        product_image{
          value {
          name
          type
          size
          description
          url
        }}
      }
    }
  }
}`