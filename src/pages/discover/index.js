import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

import { discoverTopMenu } from '../../common/local-data'
import {
    DiscoverWrapper
}
    from './style'
function Discover(props) {
    return (
        <DiscoverWrapper>
            <div className='top-backgound'>
                <div className='wrap-v1 menu-cen'>
                    <div className='menu'>
                        {
                            discoverTopMenu.map((item, index) => {
                                return <NavLink className='menu-item' to={item.url} key={item.title}>{item.title}</NavLink>
                            })
                        }
                    </div>
                </div>
            </div>

            {renderRoutes(props.route.routes)}
        </DiscoverWrapper>
    )
}
export default memo(Discover)