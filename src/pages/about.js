import React from 'react'
import { Link } from 'gatsby'

const about = () => {
    return (
        <div>
            <h1>
                About Me
            </h1>
            <p>
                I'm currently working as software engineer in Tech Mahindra.
            </p>
            <Link to="/contact">
                Contact me.
                </Link>
        </div>
    )

}

export default about