import { memo, useEffect, useRef, useState } from 'react'
import { PlayerWrapper } from './style'
import {shallowEqual, useDispatch,useSelector} from 'react-redux'
import { Slider} from 'antd';
import {changePlayModeAction, getCurrentSongDetailAction} from '../../store/actionsCreators'

import {getMMSS} from '../../../../utils/date-format'
import { set } from 'immutable';
function getPlaySongURL(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

function Player() {
    const [isPlaying,setIsPlaying]=useState(false)
    const [currentDt,setCurrentDt]=useState(0)
    const [value,setValue]=useState(0)
    const [isChange,setIsChange]=useState(false)
    const [firstAddCurrentSong,setFirstAddCurrentSong]=useState(0)
    const tap_play = () => {
        if(!isPlaying){
            audioRef.current.play()
            setIsPlaying(true)
            
        }else{
            audioRef.current.pause()
            setIsPlaying(false)
        }
        
    }
    const onMouseUp=(value)=>{
        audioRef.current.currentTime=value/100*dt/1000
        setIsChange(false)
        audioRef.current.play()
        setIsPlaying(true)
    }
    const onChange=(value)=>{
        setValue(value)
        setIsChange(true)

    }
    const timeUpdate=(e)=>{
        if(!isChange){
            setCurrentDt(e.target.currentTime)
            setValue(e.target.currentTime*100/dt*1000)
        }
        
    }
    const changePlayMode=()=>{
        dispatch(changePlayModeAction())
    }

    const audioRef=useRef();
    const {currentSongDetail,firstCurrentSongId,playMode}=useSelector(state=>({
        currentSongDetail:state.getIn(['song','currentSongDetail']),
        firstCurrentSong:state.getIn(['discover','recommend','recommendTopList'])[0]
                        &&state.getIn(['discover','recommend','recommendTopList'])[0].tracks[0].id,
        playMode:state.getIn(['song','playMode'])

    }),shallowEqual)


    useEffect(()=>{
        audioRef.current.play().then(res=>{
            setIsPlaying(true)
        }).catch(err=>{
            setIsPlaying(false)
        })
    },[currentSongDetail])

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getCurrentSongDetailAction(firstCurrentSongId||1498342485))
    },[dispatch])
    

    const imgUrl=currentSongDetail.songs&&currentSongDetail.songs[0].al.picUrl;
    const name=currentSongDetail.songs&&currentSongDetail.songs[0].al.name;
    const dt=currentSongDetail.songs&&currentSongDetail.songs[0].dt;
    const SRC=getPlaySongURL((currentSongDetail.songs&&currentSongDetail.songs[0].id)||1498342485);
    return (
        <PlayerWrapper isPlaying={isPlaying} playMode={playMode}>   
            <div className='wrap-v2 player-box'>
                <div className='control'>
                    <span className='prev-song'></span>
                    <a className='play' onClick={e => tap_play()}></a>
                    <span className='next-song'></span>
                </div>
                <div className='current-music'>
                    <a className='img'>
                        <img src={imgUrl+'?param=120y120'}></img>
                    </a>

                    <div className='time'>
                        <div className='slider-box'>
                            <a className='name'>
                                {name}
                            </a>
                            <Slider className='slider' max={100} value={value} onAfterChange={value=>onMouseUp(value)} onChange={value=>onChange(value)}>

                            </Slider>
                        </div>

                        <div className='duration'>
                            <span className='current-time'>{getMMSS(currentDt*1000)}</span>/
                            <span className='total'>{getMMSS(dt)}</span>
                        </div>
                        <audio ref={audioRef}  src={SRC} onTimeUpdate={e=>timeUpdate(e)}></audio>
                    </div>
                </div>
                <div className='options'>
                    <div className='left'>
                        <span className='collect'></span>
                        <span className='share'></span>
                    </div>
                    <div className='right'>
                        <span className='volume'></span>
                        <span className='play-mode' onClick={e=>changePlayMode()}> </span>
                        <span className='play-list'></span>
                    </div>
                </div>
            </div>
        </PlayerWrapper>
    )
}
export default memo(Player)