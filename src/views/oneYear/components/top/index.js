import React from 'react';



import './index.scss'
import Text from '@/components/textbox/index'


import emailIcon from '@/assets/icon/email.svg'
import phoneIcon from '@/assets/icon/phone.svg'





function Top() {
    const colors = [
        '#4a5354', 
        '#52aea524',
        '#444f8a',
        '#fff'
    ]
    function changColor(color) {
        document.querySelector('.resume').style.backgroundColor = color
    }
    return (
        <div className="top-wrapper">
            <p className="name">
                向方坤
            </p>
            <div className="status">
                <Text>在职</Text>
                <Text bgColor="#FF5722" borderColor="#FF5722">一年经验</Text>
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
                     <p>182****5121</p>
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
            <div className="color-picker">
                {
                    colors.map(color => {
                        return (
                            <div className="color-item" style={{
                                backgroundColor: color
                            }} onClick={()=>{changColor(color)}} key={color}>

                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}


export default Top