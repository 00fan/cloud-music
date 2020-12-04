import playerbar from '../../../../assets/img/playbar.png'

import styled from 'styled-components'


export const PlayerWrapper =styled.div.attrs((props)=>{
    switch (props.playMode){
        case 0:
            return {
                position:'-3px -344px',
                hoverPosition:'-33px -344px'
            }
        case 1:
            return {
                position:'-66px -248px',
                hoverPosition:'-93px -248px'
            }
        case 2:
            return {
                position:'-66px -344px',
                hoverPosition:'-93px -344px'
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
        height:47px;
        display:flex;
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
                display:block;
                float:left;
                width: 36px;
                height: 36px;
                background:url(${playerbar}) 0 999px no-repeat;
                background-position:-40px ${props=>{ return props.isPlaying?'-165px':'-204px'}};
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
                width:126px;
                height:36px;
                padding-left: 13px;
                background:url(${playerbar}) no-repeat 0 9999px;
                background-position: -147px -238px;
                .volume{
                    display:inline-block;
                    width: 25px;
                    height: 25px;
                    margin: 11px 2px 0 0;
                    background:url(${playerbar}) no-repeat 0 9999px;
                    background-position: -2px -248px;
                    :hover{
                        background-position: -31px -248px;
                    }
                }
                .play-mode{
                    display:inline-block;
                    width: 25px;
                    height: 25px;
                    margin: 11px 2px 0 0;
                    background:url(${playerbar}) no-repeat 0 9999px;
                    background-position:${props=>props.position};
                    :hover{
                        background-position: ${props=>props.hoverPosition};
                    }
                }
                .play-list{
                    
                }
            }
        }

    }
`