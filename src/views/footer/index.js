import React from 'react';
import VImg from '../../common/vimg/index'


const wechat = require('../../icon/wechat.jpg')



function Footer(prop) {
    return (
        <div className="footer">
            {/* <img src={wechat} alt=""/> */}
            <VImg src={wechat} />
            <p>&copy;向方坤 2020-06</p>   
        </div>
    )
}


export default Footer