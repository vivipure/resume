import React from 'react'

import './index.scss'

export default function Jump (props) {
    const {text, icon} = props
    const splitText = text.split('')
    return (
        <div className="wave">
            <span>{icon}</span>
            {
                splitText.map((t, i) => {
                return  <span style={{
                    '--d': i+1
                }}>{t}</span>
                })
            }
        </div>
    )
}
