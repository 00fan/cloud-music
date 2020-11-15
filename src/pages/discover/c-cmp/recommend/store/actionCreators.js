import {getTopBanners,getHotRecommendTitle,getHotRecommend,getNewDisc} from '../../../../../services/discover/recommend'
import * as constantType from './constant'
const changeTopBannerAction=(res)=>{
    return {
        type:constantType.CHANGE_TOP_BANNERS,
        topBanners:res
    }
}

const changeHotRecommendTitleAction=(res)=>{
    return {
        type:constantType.CHANGE_HOT_RECOMMEND_TITLE,
        hotRecommendTitle:res
    }
}
const changeHotRecommendAction=(res)=>{
    return {
        type:constantType.CHANGE_HOT_REACOMEND,
        hotRecommend:res
    }
}
const changeNewDiscAction=(res)=>{
    return {
        type:constantType.CHANGE_NEW_DISC,
        newDisc:res
    }
}

//异步发送网络请求
export const getTopBannersAction=()=>{
    return (dispatch)=>{
        getTopBanners().then(res=>{
            dispatch(changeTopBannerAction(res.data.banners))
        })
    }
}

export const getHotRecommendTitleAction=()=>{
    return (dispatch,getState)=>{
        getHotRecommendTitle().then(res=>{
            dispatch(changeHotRecommendTitleAction(res.data.tags));
        })
    }
}

export const getHotRecommendAction=(limit)=>{
    return (dispatch,getState)=>{
        getHotRecommend(limit).then(res=>{
            dispatch(changeHotRecommendAction(res.data.result))
        })
    }
}

export const getNewDiscAction=(config)=>{
    return (dispatch,getState)=>{
        getNewDisc(config).then(res=>{
            dispatch(changeNewDiscAction(res.data.monthData))
        })
    }
}