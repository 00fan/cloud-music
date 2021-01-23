import playerbar from '../../../../assets/img/playbar.png'
import play_list from '../../../../assets/img/playlist_bg.png'

import styled from 'styled-components'


export const PlayerWrapper = styled.div.attrs((props) => {
    switch (props.playMode) {
        case 0:
            return {
                position: '-3px -344px',
                hoverPosition: '-33px -344px'
            }
        case 1:
            return {
                position: '-66px -248px',
                hoverPosition: '-93px -248px'
            }
        case 2:
            return {
                position: '-66px -344px',
                hoverPosition: '-93px -344px'
            }
    }



})`
    position:fixed;
    bottom:0;
    width:100%;
    height:53px;
    background:url(${playerbar}) no-repeat;
    background-position: 0 0;
    background-repeat: repeat-x;
    font-size:12px;
    color:#fff;
    .player-box{
        height:40px;    
        display:flex;
        margin-top:5px;
        .control{
            width:137px;
            height:42px;
            padding: 6px 0 0 0;
            .prev-song{
                display: block;
                float: left;
                width: 28px;
                height: 28px;
                margin-right: 8px;
                margin-top: 5px;
                background:url(${playerbar}) 0 -130px no-repeat;
                :hover{
                    background-position: -30px -130px;
                }
            }
            .play{
                text-indent:-9999px;
                display:block;
                float:left;
                width: 36px;
                height: 36px;
                background:url(${playerbar}) 0 999px no-repeat;
                background-position:-40px ${props => { return props.isPlaying ? '-165px' : '-204px' }};
            }
            .next-song{
                display: block;
                float: left;
                width: 28px;
                height: 28px;
                margin-left: 8px;
                margin-top: 5px;
                background:url(${playerbar}) -80px -130px no-repeat;
                :hover{
                    background-position: -110px -130px;
                }
            }
        }
        .current-music{
            width:642px;
            height:42px;
            .img{
                float:left;
                width:34px;
                height:34px;
                margin: 6px 15px 0 0;
                img{
                    width:34px;
                    height:34px;
                }
            }
            .time{
                float:left;
                width:593px;
                height:34px;
                .slider-box{
                    width:523px;
                    float:left;
                    .name{
                        display:block;
                        height:14px;
                        color:#fff;
                        padding:5px 5px;
                    }
                }
                .duration{
                    padding-top:20px;
                    width:70px;
                    float:right;
                }

            }
        }
        .options{
            height:42px;
            width:200px;
            .left{
                width:60px;
                height:36px;
                display:inline-block;
                .collect{
                    display:inline-block;
                    width: 25px;
                    height: 25px;
                    margin: 11px 2px 0 0;
                    background:url(${playerbar}) no-repeat 0 9999px;
                    background-position: -88px -163px;
                    :hover{
                        background-position: -88px -189px;
                    }
                }
                .share{
                    display:inline-block;
                    width: 25px;
                    height: 25px;
                    margin: 11px 2px 0 0;
                    background:url(${playerbar}) no-repeat 0 9999px;
                    background-position: -114px -163px;
                    :hover{
                        background-position: -114px -189px;
                    }
                }
            }
            .right{
                display:inline-block;
                width:136px;
                height:36px;
                padding-left: 13px;
                background:url(${playerbar}) no-repeat 0 9999px;
                background-position: -147px -238px;
                .volume{
                    position:relative;
                    display:inline-block;
                    width: 25px;
                    height: 25px;
                    margin: 11px 2px 0 0;
                    background:url(${playerbar}) no-repeat 0 9999px;
                    background-position: -2px -248px;
                    :hover{
                        background-position: -31px -248px;
                    }
                    .volume-silde{
                        visibility:${props => (props.volumeIsShow ? '' : 'hidden')};
                        position:relative;
                        bottom:100px;
                        padding:10px 0;
                        left:-5px;
                        width:30px;
                        height:90px;
                        background:#080707;
                        text-align:center;
                        
                    }
                }
                .play-mode{
                    display:inline-block;
                    width: 25px;
                    height: 25px;
                    margin: 11px 2px 0 0;
                    background:url(${playerbar}) no-repeat 0 9999px;
                    background-position:${props => props.position};
                    :hover{
                        background-position: ${props => props.hoverPosition};
                    }
                }
                .play-list-icon{
                    position:relative;
                    display:inline-block;
                    width: 59px;
                    height: 25px;
                    margin: 11px 2px 0 0;
                    background:url(${playerbar}) no-repeat 0 9999px;
                    background-position: -42px -68px;
                    text-align:center;
                    line-height:25px;
                    vertical-align:top;
                    color: #666;
                    text-shadow: 0 1px 0 #080707;
                    :hover{
                        background-position: -42px -98px;
                    }
                }
                
            }
        }

    }
    .play-list{
        position:absolute;
        width:980px;
        height:300px;
        bottom:100%;
        left:50%;
        transform:translateX(-50%);
        
        background:url(${play_list}) 0 999px no-repeat;
        .header{
            height: 40px;
            background:url(${play_list}) 0 999px no-repeat;
            background-position: 0 0;
        }
        .main{
            background:#000;
            height:260px;
            overflow:auto;
            .list{
                height:250px;
                width:553px;
                float:left;
                a{
                    color:#fff;
                }
            }
            .lyric{
                vertical-align:top;
                overflow:hidden;
                width:420px;
                height:250px;
                float:right;
                text-align:center;
            }
        }
    }
`