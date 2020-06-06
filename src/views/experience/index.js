import React from 'react';



import './index.scss'
import Text from '../../common/textbox/index'
import Header from '../../common/header/index'

function Experience() {
    return (
        <div className="experience-wrapper">
            <Header text="教育经历" />
            <div className="educate">
                <div className="schcool-name">
                    西南科技大学
                </div>
                <div className="educate-time">
                    2015.09 - 2019.06
                </div>
            </div>
            <Header text="工作经历" />
            <div className="company">
                <p className="company-name">
                    深圳阅信文化传媒有限公司
                </p>
                <p className="timegap">
                    2019-07 - 至今
                </p>
            </div>
            <div className="work">
                前端工程师
            </div>
            <div className="products">
                <div className="product-item">
                    <div className="product-name">
                        书城后台管理系统
                    </div>
                    <ul className="dutys">
                        <li className="duty">
                            公司范围内使用的书城管理系统，管理配置公司小说业务(Vue)
                        </li>
                        <li className="duty">
                            负责项目前端的所有构建，基于业务的框架封装，组件配置，路由优化，状态管理
                        </li>
                        <li className="duty">
                            具体功能组件的开发，如二维码展示，栏目拖拽，表格数据展示，功能的配置等
                        </li>
                    </ul>
                </div>
                <div className="product-item">
                    <div className="product-name">
                        小说移动端App的多平台开发
                    </div>

                    <ul className="dutys">
                        <li className="duty">
                            小说App的功能开发，如展示页，详情页，阅读页，支付等
                        </li>
                        <li className="duty">
                            <Text bgColor="#03a9f4" borderColor='#03a9f4'>
                                H5单页应用
                            </Text>
                            <span>公司内部单页应用框架开发的小说App;</span>   
                        </li>
                        <li className="duty">
                            <Text bgColor="#03a9f4" borderColor='#03a9f4'>
                                快应用
                            </Text>
                           <span>基于快应用框架开发的小说App应用;</span> 
                        </li>
                        <li className="duty">
                            <Text bgColor="#03a9f4" borderColor='#03a9f4'>
                                Hybird
                            </Text>
                            <span>和安卓同事协作完成的hybird混合App;</span>
                        </li>
                        <li className="duty">
                        <Text bgColor="#03a9f4" borderColor='#03a9f4'>
                            uniapp
                        </Text>
                        <span>
                            基于uniapp框架完成的多平台，多小程序的小说App。
                        </span>
                        </li>
                    </ul>
                </div>
                <div className="product-item">
                    <div className="product-name">
                        扩展开发
                    </div>
                    <ul className="dutys">
                        <div className="duty-name">
                            <Text bgColor="#03a9f4" borderColor='#03a9f4'>
                                chrome插件开发
                            </Text>
                        </div>
                            
                        <li className="duty">
                           开发的数据爬取插件，自动生成报表。 方便运营同事对数据账号的统计，提高同事工作效率.
                        </li>
                        <div className="duty-name">
                            <Text bgColor="#03a9f4" borderColor='#03a9f4'>
                                运营落地页生成器
                            </Text>
                        </div>
                        <li className="duty">
                            运营推广落地页的生成器，根据微信公众号信息以及推广内容生成落地页。完成了可视化操作和编辑
                        </li>
                    </ul>
                </div>
            </div>
            <Header text="个人项目" />
            <div className="items">
                <div className="item-name">
                    实时聊天应用
                </div>
                <p className="item-desc">基于socket.io的聊天应用，利用React构建，部分组件采用React Hooks编写。后端采用express+mongoDB，利用JWT实现用户会话控制</p>
                <Text>React Hooks</Text>
                <Text>socketio</Text>
                <Text>mongo</Text>
                <Text>express</Text>
            </div>
            <div className="items">
                <div className="item-name">
                    Chrome插件脚手架
                </div>
                <p className="item-desc">
                    配置了Chrome extension开发的通用配置，通过webpack对代码进行打包。
                </p>
                <Text>Webpack</Text>
            </div>
            <Header text="技术栈" />
            <div className="skill-stack">
               <p className="skill-item">熟练编写语义化的HTML5，对布局能够用CSS进行精确还原，深刻理解CSS盒模型，定位，动画，BFC等特性</p>
               <p className="skill-item">了解ECMAScript的语法标准，使用ES6进行业务代码的编写,能够使用Webpack对项目进行打包和性能优化</p>
               <p className="skill-item">熟练使用Vue全家桶，结合Element UI对项目进行快速开发。熟练使用React以及React Hooks</p>
               <p className="skill-item">掌握快应用,uniapp,H5,Hybird 多个移动端方案的开发,能够开发适配移动端的PC项目</p>
               <p className="skill-item">后端能够使用Express, Django进行业务代码的编写，数据库使用MongoDB,以及Sqlite ORM</p>
               <p className="skill-item">熟练使用GIT</p>
            </div>
        </div>
    )
}


export default Experience