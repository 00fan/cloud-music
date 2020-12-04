import {Map} from 'immutable'
import * as constantsType from './constans.js'

const defaultState=Map({
    currentSongDetail:{},
    playList:[],
    playMode:0,
    displaySongLyric:'',
    displaySongDetail:{}
})

const reducer=(state=defaultState,actions)=>{
    switch (actions.type){
        case constantsType.CHANGE_CURRENT_SONG_DETAIL:
            return state.set('currentSongDetail',actions.currentSongDetail)
        case constantsType.CHANGE_PLAYLIST:
            return state.set('playList',[...state.get('playList'),actions.newSong])
        case constantsType.CHANGE_PLAY_MODE:
            return state.set('playMode',actions.playMode)
        case constantsType.CHANGE_DISPLAY_SONG_LYRIC:
            return state.set('displaySongLyric',actions.lyric)
        default:
            return state
    }
}
export default reducer;