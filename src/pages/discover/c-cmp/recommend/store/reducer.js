import * as actionsType from './constant'
import {Map} from 'immutable'

const initState=Map({
    topBanners: [],
    hotRecommendTitle:[],
    hotRecommend:[],
    newDisc:[]
})

const reducer=function(state=initState,actions){
    
    switch (actions.type){
        case actionsType.CHANGE_TOP_BANNERS:
            return state.set('topBanners',actions.topBanners)
        case actionsType.CHANGE_HOT_RECOMMEND_TITLE:
            return state.set('hotRecommendTitle',actions.hotRecommendTitle)
        case actionsType.CHANGE_HOT_REACOMEND:
            return state.set('hotRecommend',actions.hotRecommend)
        case actionsType.CHANGE_NEW_DISC:
            return state.set('newDisc',actions.newDisc)
        default:
            return state;
    }
}
export default reducer;