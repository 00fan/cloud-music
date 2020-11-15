import {Map} from 'immutable'
import * as constantsType from './constants'

const defaultState=Map({
    topListCategory:[],
    topList:{}
})
const reducer=(state=defaultState,actions)=>{
    switch (actions.type){
        case constantsType.CHANGE_TOP_LIST:
            return state.set('topList',actions.topList);
        case constantsType.CHANGE_TOP_LIST_CARTGORY:
            return state.set('topListCategory',actions.topListCategory)
        default:
            return state;
    }
}
export default reducer;