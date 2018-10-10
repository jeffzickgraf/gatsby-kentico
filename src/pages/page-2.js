import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second pages</h1>
    <p>Welcome to page 2 or 7</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
