import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeadersSwrapper }from './style'

function ThemeHeader(props){
    const {title='',playList=[]}=props
    return(
        <HeadersSwrapper>
            <div className='header-left'>
                <div className='title'>
                    <h2><a>{title}</a></h2>
                </div>
                <div className='play-list'>
                    {
                        playList.map((item,index)=>{
                            if(index<5){
                                return(
                                    <div className='play-item' key={item.id}>
                                        <NavLink to='/'>{item.name}</NavLink>
                                        <span>|</span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className='header-right'>
                    <a>更多</a>
            </div>
        </HeadersSwrapper>
    )
}   
export default memo(ThemeHeader)