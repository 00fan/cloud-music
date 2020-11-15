import {CHANGE_TOP_LIST,CHANGE_TOP_LIST_CARTGORY} from './constants'
import {getToplist,getToplistCategory} from  '../../../../../services/discover/topList'
const changeTopListAction=(res)=>{
    return{
        type:CHANGE_TOP_LIST,
        topList:res
    }
}

const changeTopListCategoryAction=(res)=>{
    return {
        type:CHANGE_TOP_LIST_CARTGORY,
        topListCategory:res
    }
}

export const getTopListAction=(id)=>{
    return dispatch=>{
        getToplist(id).then(res=>{
            dispatch(changeTopListAction(res.data.playlist))
        })
    }
}
export const getToplistCategoryAction=()=>{
    return dispatch=>{
        getToplistCategory().then(res=>{
            dispatch(changeTopListCategoryAction(res.data.list))
        })
    }
}