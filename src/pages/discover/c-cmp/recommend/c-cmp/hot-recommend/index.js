import { memo, useEffect } from 'react'
import { HotRecommendSwrapper } from './style'

import { getHotRecommendTitleAction, getHotRecommendAction } from '../../store/actionCreators'

import ThemeHeader from '../../../../../../components/theme-header-recommend'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import countFormat from '../../../../../../utils/count-format'
function HotRecommend() {
    const { hotRecommendTitle, hotRecommend } = useSelector(state => ({
        hotRecommendTitle: state.getIn(['discover', 'recommend', 'hotRecommendTitle']),
        hotRecommend: state.getIn(['discover', 'recommend', 'hotRecommend'])
    }), shallowEqual)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotRecommendTitleAction())
        dispatch(getHotRecommendAction(8))
    }, [dispatch])
    return (
        <HotRecommendSwrapper>
            <ThemeHeader title='热门推荐' playList={hotRecommendTitle}></ThemeHeader>
            <ul className='hot-recommend'>
                {
                    hotRecommend.map((item, index) => {
                        return (
                            <li key={item.id} className='recommend-item'>
                                <a>
                                    <img src={item.picUrl}></img>
                                </a>
                                <p><a className='a-hover'>{item.name}</a></p>
                                <div className='icon-box'>
                                    <span className='head-ser-icon'></span>
                                    <span className='play-count'>{countFormat(item.playCount) }</span>
                                    <span className='play-icon'></span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </HotRecommendSwrapper>
    )
}
export default memo(HotRecommend)
