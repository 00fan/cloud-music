import request from '../request'

export const getCurrentSong=(id)=>{
    return request({
        url:'/song/url',
        params:{
            id
        }
    })
}
export const getCurrentSongDetail=(ids)=>{
    return request({
        url:'/song/detail',
        params:{
            ids
        }
    })
}

export const getSongLyric=(id)=>{
    return request({
        url:'/lyric',
        params:{
            id
        }
    })
}