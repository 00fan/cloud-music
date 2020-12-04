import { memo, useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import TopListHeader from '../../../../../../components/theme-header-recommend/index'
import { getToplistCategoryAction } from '../../../ranking/store/actionCreators'
import { getRecommendTopListAciton } from '../../store/actionCreators'
import {getCurrentSongDetailAction} from '../../../../../song/store/index'
import { TopListWrapper } from './style'
function TopList() {
    const dispatch = useDispatch();
    const { fIdObj, sIdObj, tIdObj, recommendTopList } = useSelector(state => ({
        fIdObj: state.getIn(['discover', 'ranking', 'topListCategory'])[0],
        sIdObj: state.getIn(['discover', 'ranking', 'topListCategory'])[1],
        tIdObj: state.getIn(['discover', 'ranking', 'topListCategory'])[2],
        recommendTopList: state.getIn(['discover', 'recommend', 'recommendTopList'])
    }), shallowEqual)
    useEffect(() => {
        if (fIdObj && sIdObj && tIdObj) {
            dispatch(getRecommendTopListAciton(fIdObj.id))
            dispatch(getRecommendTopListAciton(sIdObj.id))
            dispatch(getRecommendTopListAciton(tIdObj.id))
        }
    }, [fIdObj])

    useEffect(() => {
        dispatch(getToplistCategoryAction())
    }, [dispatch])

    const playMusic=(id)=>{
        dispatch(getCurrentSongDetailAction(id))
    }
    return (
        <TopListWrapper>
            <TopListHeader title='榜单'></TopListHeader>
            <div className='top-list'>
                {
                    recommendTopList.map((item, index) => {
                        {
                            return (
                                <div className='top-list-item' key={item.id}>
                                    <div className='header'>
                                        <NavLink className='img-link' to={'/discover/ranking?id=' + item.id}>
                                            <img src={item.coverImgUrl}></img>
                                        </NavLink>
                                        <div className='title'>
                                            <NavLink to={'/discover/ranking?id=' + item.id}>{item.name}</NavLink>
                                            <a className='icon-play'></a>
                                            <a className='icon-subscribed'></a>
                                        </div>
                                    </div>
                                    <div className='track'>
                                        {
                                            item.tracks.slice(0, 10).map((iten, indey) => {
                                                return (
                                                    <div className='track-item' key={iten.name}>
                                                        <span>{indey + 1}</span>
                                                        <NavLink className='a-to-ranking' to={'/song?id=' + iten.id}>{iten.name}</NavLink>
                                                        <div className='play-icon'>
                                                            <a onClick={e=>playMusic(iten.id)}></a>
                                                            <a></a>
                                                            <a></a>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <NavLink className='more' to={'/discover/ranking?id=' + item.id}>查看更多&gt;</NavLink>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </TopListWrapper>
    )
}
export default memo(TopList)