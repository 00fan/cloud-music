import request from '../request'
export const getToplistCategory=function(){
    return request({
        url:'/toplist'
    })
}
export const getToplist=function (id) {
    return request({
        url:'playlist/detail',
        params:{
            id
        }
    })
}