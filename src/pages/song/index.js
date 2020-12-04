import { memo,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {SongWrapper} from './style'
import {getDisplaySongLyricAction} from './store/actionsCreators'
import lyricFormat from '../../utils/lyric-format'
function Song(props){
    const id=/\d+/.exec(props.location.search)[0]
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getDisplaySongLyricAction(id));
    },[id])
    const {lyric}=useSelector(state=>({
        lyric:state.getIn(['song','displaySongLyric'])
    }))
    return (
        <SongWrapper>
            {
                lyric&&Object.keys(lyricFormat(lyric)).map((key)=>{
                    console.log(key)
                    return <div>{lyricFormat(lyric)[key]||'-------'}</div>
                })
            }
        </SongWrapper>
    )
}
export default memo(Song)