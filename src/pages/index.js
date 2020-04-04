import React from 'react'
import { Link } from 'gatsby'


const IndexPage = () => {
    return (
        <div>
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
        </div>
    )
}

export default IndexPage