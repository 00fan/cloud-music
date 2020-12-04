import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeadersSwrapper }from './style'

function ThemeHeader(props){
    const {title='歌曲列表',count}=props
    return(
        <HeadersSwrapper>
            <div className='header-left'>
                <div className='title'>
                    <h2><a>{title}</a></h2>
                </div>
                <div className='play-list'>
                    100首歌
                </div>
            </div>
            <div className='header-right'>
                播放:<a>{count}</a>次
            </div>
        </HeadersSwrapper>
    )
}   
export default memo(ThemeHeader)