import React from 'react'
import './index.scss'


import Top from './components/top/index'
import Experience from './components/experience/index'
import Footer from './components/footer/index'

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