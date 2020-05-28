import React from 'react';



import './index.scss'
import Text from '../../common/textbox/index'

let emailIcon = require('../../icon/email.svg')
let phoneIcon = require('../../icon/phone.svg')

function Top(prop) {
    return (
        <div className="top-wrapper">
            <p className="name">
                向方坤
            </p>
            <div className="status">
                <Text>求职中</Text>
                <Text>一年经验</Text>
            </div>
            <div className="locate">
                <span>深圳</span>
                <div className="skill">
                    前端/后端/全栈开发
                </div>
            </div>
            <div className="concat">
                <div className="concat-item">
                    <img src={phoneIcon} alt=""/>
                     <p>18281625121</p>
                </div>
                <a className="concat-item" href='mailto:vivipureheart@gmail.com'>
                     <img src={emailIcon} alt=""/>
                     <p>vivipureheart@gmail.com</p>
                </a>
            </div>
            <div className="skill">
                <Text bgColor="#3771a1" textColor="#ffd344" borderColor="#3771a1">Python</Text>
                <Text bgColor="#f1da50" borderColor="#f1da50" textColor="#111">JavaScript</Text>
                <Text bgColor="#61dafb" borderColor="#61dafb" textColor="#111">React</Text>
                <Text bgColor="#41b783" borderColor="#41b783" textColor="#384863">Vue</Text>
                <Text bgColor="#8ec74c" borderColor="#8ec74c" textColor="#fff">Nodejs</Text>
            </div>

        </div>
    )
}


export default Top