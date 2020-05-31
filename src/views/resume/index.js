import React from 'react'
import './index.scss'


import Top from '../top/index'
import Experience from '../experience/index'
import Footer from '../footer/index'


export default function Resume() {
    return (
        <div className="resume">
            <Top />
            <Experience />
            <Footer />
            {/* <img src={wechat} alt=""/> */}
        </div>
    )
}