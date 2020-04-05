import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'


const about = () => {
    return (
        <div>
            <Header />
            <h1>
                About Me
            </h1>
            <p>
                I'm currently working as software engineer in Tech Mahindra.
            </p>
            <Link to="/contact">
                Contact me.
                </Link>
                <Footer />
        </div>
    )

}

export default about