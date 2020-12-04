import request from '../request'
export function getTopBanners(){
    return request({
        url:'/banner',
    })
}
export function getHotRecommendTitle(){
    return request({
        url:'/playlist/hot',
    })
}
export function getHotRecommend(limit){
    return request({
        url:'/personalized',
        method:'GET',
        params:{
            limit:limit||50
        }
    })
}

export function getNewDisc({limit,offset,area,type,year,month}){
    return request({
        url:'/top/album',
        method:'GET',
        params:{
            limit:limit||50,
            offset:offset||0,
            area:area||'ALL',
            type:type||'new',
            year:year||Date().getUTCFullYear,
            month:month||Date().getMonth
        }
    })
}
