import * as constantType from './constant'
import {Map} from 'immutable'

const initState=Map({
    topBanners: [],
    hotRecommendTitle:[],
    hotRecommend:[],
    newDisc:[],
    recommendTopList:[]
})

const reducer=function(state=initState,actions){
    
    switch (actions.type){
        case constantType.CHANGE_TOP_BANNERS:
            return state.set('topBanners',actions.topBanners)
        case constantType.CHANGE_HOT_RECOMMEND_TITLE:
            return state.set('hotRecommendTitle',actions.hotRecommendTitle)
        case constantType.CHANGE_HOT_REACOMEND:
            return state.set('hotRecommend',actions.hotRecommend)
        case constantType.CHANGE_NEW_DISC:
            return state.set('newDisc',actions.newDisc)
        case constantType.PUSH_REACOMMEND_TOP_LIST:
            return state.set('recommendTopList',[...state.get('recommendTopList'),actions.recommendTopList].slice(0,3))
        default:
            return state;
    }
}
export default reducer;