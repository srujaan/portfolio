import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = () => {
    return (
        <Layout>
        <h1>
            Hi there!
        </h1>
        <h2>
            Thanks for stopping by,
            I'm srujan, and I hail from beautiful city of Hyderabad
        </h2>
        <p>

        <Link to="/contact">
            Contact me.
        </Link>
        </p>
        </Layout>
    )
}


export default IndexPage