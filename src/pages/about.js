import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const about = () => {
    return (
        <Layout>
            <h1>
                About Me
            </h1>
            <p>
                I'm currently working as software engineer in Tech Mahindra.
            </p>
            <Link to="/contact">
                Contact me.
                </Link>
        </Layout>
    )

}

export default about