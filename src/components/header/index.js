import React from 'react'
import './index.css'

const Header = (props) => {
    const { text } = props
    return (
        <div className="header-wrapper">
            <h2>{text}</h2>
            <p></p>
        </div>
    )
}

export default Header