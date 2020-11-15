import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import {Button, Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons';

import {
    HeaderWrapper,
    WrapperLeft,
    WrapperRight
} from './style'
import { HeaderLink } from '../../common/local-data'

function AppHeader(props) {
    return (
        <HeaderWrapper>
            <div className='content wrap-v1'>

                <WrapperLeft>
                    <div className='logo'>
                        <a href='/#'></a>
                    </div>
                    <div className='selectLink'>
                    {
                        HeaderLink.map((item, index) => {
                            if (index < 3) {
                                return <NavLink to={item.url}  key={item.title}>{item.title}</NavLink>
                            }else{
                                return <a href={item.url} key={item.title} target='_blank'>{item.title}</a>
                            }
                        })
                    }
                    </div>
                    
                </WrapperLeft>
                <WrapperRight>
                <Input placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} size="small" shape="round" className='search'></Input>
                    <Button className='cre-cen' shape="round" ghost>创作者中心</Button>
                    <Button className='login' size="small" ghost>登录</Button>
                </WrapperRight>

            </div>
            <div className='subnav'></div>
            


        </HeaderWrapper>
    )
}
export default memo(AppHeader)