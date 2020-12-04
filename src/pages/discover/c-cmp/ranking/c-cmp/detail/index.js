import { memo, useEffect, Fragment } from 'react'
import {NavLink} from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import Header from '../../../../../../components/theme-header-ranking/index'
import Loading from '../../../../../../components/loading/index'

import {getCurrentSongDetailAction} from '../../../../../song/store/index'
import { getTopListAction, getToplistCategoryAction } from '../../store/actionCreators'
import { getMonthDay,getMMSS } from '../../../../../../utils/date-format'
function Detail(props) {
    const dispatch = useDispatch();
    const { id } = props;
    const { firstIdObj, topList } = useSelector(state => {
        return {
            firstIdObj: state.getIn(['discover', 'ranking', 'topListCategory'])[0],
            topList: state.getIn(['discover', 'ranking', 'topList'])
        }
    }, shallowEqual)
    // useEffect(() => {
    //     if (firstIdObj) {
    //         dispatch(getTopListAction(firstIdObj.id))
    //     }
    // }, [firstIdObj])
    useEffect(() => {
        if (id) {//从路由拿不到，取第一个topListCategory的id
            dispatch(getTopListAction(id))
        }else{
            if(firstIdObj){
                dispatch(getTopListAction(firstIdObj.id))
            }
            
        }

    }, [id])

    const playMusic=(id)=>{
        dispatch(getCurrentSongDetailAction(id))
    }

    return (
        <DetailWrapper>
            <div className='top'>
                <div className='img-div'>
                    <img src={topList.coverImgUrl}></img>
                </div>
                <div className='text-box'>
                    <div className='title'>
                        <h2>{topList.name}</h2>

                    </div>
                    <div className='update-time'>
                        <h2>最近更新：{getMonthDay(topList.updateTime)}({topList.description})</h2>
                    </div>
                    <div>
                        <div >
                            <span className='play'>播放</span>
                            <span className='subscribed'>{topList.subscribedCount || 99999}</span>
                            <span className='share'>{topList.shareCount || 99999}</span>
                            <span className='download'>下载</span>
                            <span className='comment'>{topList.commentCount || 99999}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='content-wrapper'>
                <Header count={topList.playCount}></Header>
                <div className='song-title'>
                    <div className='place-holder'></div>
                    <div className='title'>标题</div>
                    <div className='time'>时长</div>
                    <div className='singer'>歌手</div>
                </div>
                <div className='track'>
                    <Loading show={topList.tracks ? false : true}></Loading>
                    {
                        (topList.tracks || []).map((item, index) => {//tracks数据还未拿到时
                            return (
                                <div className='track-item' key={item.id}>
                                    <span className='item-index'>{index + 1}<span className='index-icon'></span></span>
                                    <span className='item-name'>
                                        <div className='img-box'>{index<3?<img src={item.al.picUrl+'?param=120y120'}></img>:''}</div>
                                        <span className='play-icon' onClick={e=>{playMusic(item.id)}}></span>
                                        <NavLink to={'/song?id='+item.id}>
                                            {item.name}
                                        </NavLink>
                                    </span>
                                    <span className='item-time'>
                                        <span className='time'>{getMMSS(item.dt)}</span>
                                        <div className='time-icon'>
                                            <a></a>
                                            <a></a>
                                            <a></a>
                                            <a></a>
                                        </div>
                                    </span>
                                    <span className='item-ar'>{
                                        item.ar.map((iten, index) => {
                                            if (index === 0) {
                                                return (
                                                    <a key={iten.name}>{iten.name}</a>
                                                )
                                            }
                                            return (
                                                <Fragment key={iten.name}>
                                                    <span>/</span><a>{iten.name}</a>
                                                </Fragment>
                                            )
                                        })
                                    }
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </DetailWrapper>
    )
}

export default memo(Detail)