import React from 'react';



import './index.scss'
import Text from '../../common/textbox/index'
import Header from '../../common/header/index'

function Experience(prop) {
    return (
        <div className="experience-wrapper">
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
                            负责项目前端的所有构建，基于业务的框架封装，组件配置，路由优化，状态管理。 
                        </li>
                        <li className="duty">
                            具体功能组件的开发，如二维码展示，栏目拖拽，表格数据展示，表单数据新建与修改等，
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
                            公司内部单页应用框架开发的小说App;
                        </li>
                        <li className="duty">
                            <Text bgColor="#03a9f4" borderColor='#03a9f4'>
                                快应用
                            </Text>基于快应用框架开发的小说App应用;
                        </li>
                        <li className="duty">
                            <Text bgColor="#03a9f4" borderColor='#03a9f4'>
                                Hybird
                            </Text>和公司安卓协作完成的基于webview的hybird混合App;
                        </li>
                        <li className="duty">
                        <Text bgColor="#03a9f4" borderColor='#03a9f4'>
                            uniapp
                        </Text>基于uniapp框架完成的多平台，多小程序的小说App。
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
            <Header text="技术清单" />
        </div>
    )
}


export default Experience