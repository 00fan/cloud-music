import React, { Fragment, memo } from 'react'

import { FooterPolicyLink,FooterImgLink } from '../../common/local-data.js'
import { FooterWrapper } from './style'

function AppFooter(props) {
    return (
        <FooterWrapper className='wrap-v2'>
            <div className='left'>
                <p className='policy'>
                    {
                        FooterPolicyLink.map((item, index) => {
                            return (
                                <Fragment key={item.title}>
                                    <a>{item.title}</a>
                                    <span>|</span>
                                </Fragment>
                            )
                        })
                    }
                </p>
                <p className='copy'>
                    <span>网易公司版权所有©1997-2020</span>
                    <span>杭州乐读科技有限公司运营：</span>
                    <a href='https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png'>浙网文[2018]3506-263号</a>
                </p>
                <p className='contact'>
                    <span>违法和不良信息举报电话：0571-89853516</span>
                    <span>举报邮箱：</span>
                    <a href='mailto:ncm5990@163.com'>ncm5990@163.com</a>
                </p>
                <p className='filing'>
                    <span>粤B2-20090191-18</span>
                    <a href='https://beian.miit.gov.cn/#/Integrated/index' target="_blank">工业和信息化部备案管理系统网站</a>
                    <a href='href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"'>
                        <span className='police-logo'></span>
                        <span>浙公网安备 33010902002564号</span>
                    </a>
                </p>
            </div>
            <div className='right'>
                {
                    FooterImgLink.map((item,indx)=>{
                        return  (
                            <div className='linkItem' key={item.title}>
                                <a className='showImg' href={item.url}></a>
                                <span className='title'></span>
                            </div>
                        )
                    })
                }
            </div>
        </FooterWrapper>
    )
}
export default memo(AppFooter)