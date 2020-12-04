import * as constansTpye from './constans'
import {getCurrentSong,getCurrentSongDetail} from '../../../services/song/index'
import {getDisplaySongLyric} from '../../../services/song/index'

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
    return {
        type:constansTpye.CHANGE_CURRENT_SONG_DETAIL,
        currentSongDetail:res
    }
}
const changeDisplaySongLyricAction=(res)=>{
    return {
        type:constansTpye.CHANGE_DISPLAY_SONG_LYRIC,
        lyric:res
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
    return dispatch=>{
        getCurrentSongDetail(ids).then(res=>{
            dispatch(changeCurrentSongDetailAction(res.data))
            dispatch(changePlayListAction(res.data))
        })
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
        getDisplaySongLyric(id).then(res=>{
            dispatch(changeDisplaySongLyricAction((res.data&&res.data.lrc.lyric)||''))
        })
    }
}