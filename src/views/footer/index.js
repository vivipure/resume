import React from 'react';
import VImg from '../../common/vimg/index'
import Jump from '../../common/jumpText/index'


const wechat = require('../../icon/wechat.jpg')



function Footer(prop) {
    return (
        <div className="footer">
            {/* <img src={wechat} alt=""/> */}
            <div className="contact">
                <VImg src={wechat} />
                <Jump text="点击二维码添加我的WX" icon="👈"/>
            </div>
            <p>&copy;向方坤</p>   
        </div>
    )
}


export default Footer