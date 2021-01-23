import * as constansTpye from './constans'
import {getCurrentSong,getCurrentSongDetail} from '../../../services/song/index'
import {getSongLyric} from '../../../services/song/index'

// const changeCurrentSongAction=(res)=>{
//     return {
//         type:constansTpye.CHANGE_CURRENT_SONG,
//         currentSong:res
//     }
// }
const changePlayListAction=(res)=>{
    return {
        type:constansTpye.CHANGE_PLAYLIST,
        newSong:res
    }
}
const changeCurrentSongDetailAction=(res)=>{

    return (dispatch,getState)=>{
        dispatch(changePlayingSongLyricAction(res.songs[0].id))
        dispatch({
            type:constansTpye.CHANGE_CURRENT_SONG_DETAIL,
            currentSongDetail:res
        })
        
    }
}
const changePlayingSongLyricAction=(id)=>{
    return (dispatch,getState)=>{
        getSongLyric(id).then(res=>{
            dispatch({
                type:constansTpye.CHANGE_PLAYING_SONG_LYRIC,
                lyric:res.data.lrc.lyric
            })
        })
    }
}
const changeDisplaySongLyricAction=(res)=>{
    return {
        type:constansTpye.CHANGE_DISPLAY_SONG_LYRIC,
        lyric:res
    }
}
export const changeCurrentPlayIndexAction=(prevNext)=>{
    return (dispatch,getState)=>{
        const playMode=getState().getIn(['song','playMode'])
        const currentPlayIndex=getState().getIn(['song','currentPlayIndex'])
        const playList=getState().getIn(['song','playList'])
        if(playMode===1){
            let ran=Math.floor(Math.random()*playList.length);
            while(currentPlayIndex===ran&&playList.length!==1){
                ran=Math.floor(Math.random()*playList.length)
            }
            dispatch({
                type:constansTpye.CURRENT_PLAY_INDEX,
                currentPlayIndex:ran
            })
            dispatch(changeCurrentSongDetailAction(playList[ran]))
            
            return;
        }
        // if(playMode===2){
        //     dispatch({
        //         type:constansTpye.CURRENT_PLAY_INDEX,
        //         currentPlayIndex:currentPlayIndex
        //     })
        //     dispatch(changeCurrentSongDetailAction(playList[currentPlayIndex]))
        //     return;
        // }
        if(playMode===0||playMode===2){
            if(prevNext==='next'){
                if(currentPlayIndex===0){
                    dispatch({
                        type:constansTpye.CURRENT_PLAY_INDEX,
                        currentPlayIndex:playList.length-1
                    })
                    dispatch(changeCurrentSongDetailAction(playList[playList.length-1]))
                }else{
                    const i=currentPlayIndex-1;
                    dispatch({
                        type:constansTpye.CURRENT_PLAY_INDEX,
                        currentPlayIndex:currentPlayIndex-1
                    })
                    dispatch(changeCurrentSongDetailAction(playList[i]))
                }
                return;
            }
            if(prevNext==='prev'){
                if(currentPlayIndex===playList.length-1){
                    dispatch({
                        type:constansTpye.CURRENT_PLAY_INDEX,
                        currentPlayIndex:0
                    })
                    dispatch(changeCurrentSongDetailAction(playList[0]))
                }else{
                    const i=currentPlayIndex+1;
                    dispatch({
                        type:constansTpye.CURRENT_PLAY_INDEX,
                        currentPlayIndex:currentPlayIndex+1
                    })
                    dispatch(changeCurrentSongDetailAction(playList[i]))
                }
                return;
            }
        }

        // type:constansTpye.CURRENT_PLAY_INDEX,
        // currentPlayIndex:index
    }
}
// export const getCurrentSongAction=(id)=>{
//     return dispatch=>{
//         getCurrentSong(id).then(res=>{
//             dispatch(changeCurrentSongAction(res.data.data[0]))
//         })
//     }
// }
export const getCurrentSongDetailAction=(ids)=>{
    return (dispatch,getState)=>{
        const playList=getState().getIn(['song','playList'])
        const index=getState().getIn(['song','playList']).findIndex(item=>{
            console.log(item.songs[0].id)
            console.log(ids)
            return item.songs[0].id===ids
        })
        if(index===-1){
            getCurrentSongDetail(ids).then(res=>{
                dispatch(changeCurrentSongDetailAction(res.data))
                dispatch(changePlayListAction(res.data))
                dispatch({
                    type:constansTpye.CURRENT_PLAY_INDEX,
                    currentPlayIndex:0
                })
            })
        }else{
            dispatch({
                type:constansTpye.CURRENT_PLAY_INDEX,
                currentPlayIndex:index
            })
            dispatch(changeCurrentSongDetailAction(playList[index]))
        }
        
    }
}

export const changePlayModeAction=()=>{
    const modeObj={
        0:'顺序播放',
        1:'随机播放',
        2:'单曲循环'
    }
    return (dispatch,getState)=>{
        let nextMode;
        switch (getState().getIn(['song','playMode'])){
            case 0:
                nextMode=1;break;
            case 1:
                nextMode=2;break;
            case 2:
                nextMode=0;break;

        }
        dispatch({
            type:constansTpye.CHANGE_PLAY_MODE,
            playMode:nextMode
        })
    }
}
export const getDisplaySongLyricAction=(id)=>{
    return (dispatch,getState)=>{
        getSongLyric(id).then(res=>{
            dispatch(changeDisplaySongLyricAction((res.data&&res.data.lrc.lyric)||''))
        })
    }
}