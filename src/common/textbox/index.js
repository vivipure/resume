import React from 'react';
import './index.css'

const Text = (props) => {
    const {
            children,
            textColor = "#fff",
            bgColor = '#111',
            borderColor="#111"
            } = props

    return (
        <div className="text-wrapper" style={
            {
                backgroundColor: bgColor,
                color: textColor,
                borderColor: borderColor
            }

        }>
            <span className="text">{children}</span>
        </div>
    )
}
export default Text